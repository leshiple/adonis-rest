import { uniqBy, isEqual, omit, pick } from 'lodash'
import Database from '@ioc:Adonis/Lucid/Database'
import Category from 'App/Models/Category'
import Product from 'App/Models/Product'
import Modifier from 'App/Models/Modifier'
import IikoService from '../../../services/IikoService'
import GroupModifier from 'App/Models/GroupModifier'
import ImageService from '../../../services/ImageService'

export default class NomenclatureController {
  public async sync() {
    const iikoService = new IikoService()
    await iikoService.authenticate()
    const nomenclature = await iikoService.loadNomenclature()
    const {
      // products,
      // modifiers,
      // groupsModifiers,
      // pivotsGroupsMofidiersModifiers: rawPivotsGroupsMofidiersModifiers,
      // pivotsProductGroupsModifiers: rawPivotsProductGroupsModifiers,
      // categories,
      productsImages,
    } = this.normalizeNomenclature(nomenclature)
    // const newCategories = await this.createCategories(categories)
    // const newModifiers = await this.createModifiers(modifiers)
    // const newGroupsModifiers = await this.createGroupsMidifiers(groupsModifiers)
    // const preparedProducts = this.prepareProducts(products, newCategories)
    // const newProducts = await this.createProducts(preparedProducts)

    // const pivotsGroupsMofidiersModifiers = this.normalizePivotsGroupsModifiersModifiers(
    //   newGroupsModifiers,
    //   newModifiers,
    //   rawPivotsGroupsMofidiersModifiers
    // )

    // await this.createPivotsGroupsMidifiersModifiers(pivotsGroupsMofidiersModifiers)

    // const pivotsProductGroupsModifiers = this.normalizePivotsProductGroupsModifiers(
    //   newProducts,
    //   newGroupsModifiers,
    //   rawPivotsProductGroupsModifiers
    // )

    // this.createPivotsProductsGroupsMidifiers(pivotsProductGroupsModifiers)
    this.downloadImages(productsImages)
    // console.log(productsImages)
  }

  private normalizeNomenclature(nomenclature) {
    const { modifiers: rawModifiers, products: rawProducts } = nomenclature.products.reduce(
      (acc, item) => {
        if (item.type === 'dish') {
          acc.products.push(item)
        } else {
          acc.modifiers.push(item)
        }

        return acc
      },
      {
        products: [],
        modifiers: [],
      }
    )

    const {
      groupsModifiers: rawGroupsModifiers,
      pivotsProductGroupsModifiers,
      pivotsGroupsMofidiersModifiers,
    } = rawProducts.reduce(
      (acc, item) => {
        if (item.groupModifiers.length) {
          item.groupModifiers.forEach((groupModifiers, index) => {
            const modifier = nomenclature.groups.find((g) => g.id === groupModifiers.modifierId)

            if (modifier) {
              acc.groupsModifiers.push({
                name: modifier.name,
                order: index,
                iikoId: groupModifiers.modifierId,
              })
            }

            acc.pivotsProductGroupsModifiers.push({
              productId: item.id,
              groupModifiersId: groupModifiers.modifierId,
              minAmount: groupModifiers.minAmount,
              maxAmount: groupModifiers.maxAmount,
              required: groupModifiers.required,
            })

            groupModifiers.childModifiers.forEach((chilModifier) => {
              acc.pivotsGroupsMofidiersModifiers.push({
                groupModifiersId: groupModifiers.modifierId,
                modifierId: chilModifier.modifierId,
                minAmount: chilModifier.minAmount,
                maxAmount: chilModifier.maxAmount,
                required: chilModifier.required,
              })
            })

            return acc
          })
        }
        return acc
      },
      {
        groupsModifiers: [],
        pivotsProductGroupsModifiers: [],
        pivotsGroupsMofidiersModifiers: [],
      }
    )

    const productsImages = this.getGoodsImages(rawProducts)
    const modifiersImages = this.getGoodsImages(rawModifiers)

    const groupsModifiers = this.normalizeGroupsModifiers(rawGroupsModifiers)
    const modifiers = this.normalizeModifers(rawModifiers)
    const products = this.normalizeProducts(rawProducts)
    const categories = this.normalizeCategories(nomenclature.groups)

    return {
      products,
      productsImages,
      modifiers,
      groupsModifiers,
      categories,
      pivotsProductGroupsModifiers,
      pivotsGroupsMofidiersModifiers,
    }
  }

  private normalizeGroupsModifiers(groupsModifiers) {
    return uniqBy(groupsModifiers, 'iikoId')
  }

  private normalizeModifers(modifiers) {
    return uniqBy(modifiers, 'id').map((m) => ({
      iikoId: m.id,
      name: m.name,
      energyFullAmount: m.energyFullAmount,
      fiberFullAmount: m.fiberFullAmount,
      fatFullAmount: m.fatFullAmount,
      carbohydrateFullAmount: m.carbohydrateFullAmount,
      weight: m.weight,
      price: m.price,
    }))
  }

  private normalizeProducts(products) {
    return uniqBy(products, 'id').map((p) => ({
      iikoId: p.id,
      code: p.code,
      name: p.name,
      description: p.description,
      energyAmount: p.energyAmount,
      energyFullAmount: p.energyFullAmount,
      fiberAmount: p.fiberAmount,
      fiberFullAmount: p.fiberFullAmount,
      fatAmount: p.fatAmount,
      fatFullAmount: p.fatFullAmount,
      carbohydrateAmount: p.carbohydrateAmount,
      carbohydrateFullAmount: p.carbohydrateFullAmount,
      weight: p.weight,
      measureUnit: p.measureUnit,
      price: p.price,
      categoryId: p.parentGroup,
    }))
  }

  private normalizeCategories(categories) {
    return uniqBy(categories, 'id').map((c, i) => ({
      iikoId: c.id,
      order: i,
      active: 1,
      name: c.name,
    }))
  }

  private normalizePivotsGroupsModifiersModifiers(groupsModifiers, modifiers, pivots) {
    return pivots.reduce((acc, pivot) => {
      const modifier = modifiers.find((m) => m.iikoId === pivot.modifierId)
      const groupModifiers = groupsModifiers.find((g) => g.iikoId === pivot.groupModifiersId)

      if (modifier && groupModifiers) {
        acc.push({
          min_amount: pivot.minAmount,
          max_amount: pivot.maxAmount,
          required: pivot.required,
          modifier_id: modifier.id,
          group_modifiers_id: groupModifiers.id,
        })
      }

      return acc
    }, [])
  }

  private normalizePivotsProductGroupsModifiers(products, groupsModifiers, pivots) {
    return pivots.reduce((acc, pivot) => {
      const product = products.find((p) => p.iikoId === pivot.productId)
      const groupModifiers = groupsModifiers.find((g) => g.iikoId === pivot.groupModifiersId)
      if (product && groupModifiers) {
        acc.push({
          min_amount: pivot.minAmount,
          max_amount: pivot.maxAmount,
          required: pivot.required,
          product_id: product.id,
          group_modifiers_id: groupModifiers.id,
        })
      }

      return acc
    }, [])
  }

  private prepareProducts(products, categories) {
    return products.map((product) => {
      const category = categories.find((c) => c.iikoId === product.categoryId)
      return {
        ...product,
        categoryId: category?.id,
      }
    })
  }

  private async createModifiers(modifiers) {
    return await Modifier.createMany(modifiers)
  }

  private async createGroupsMidifiers(groupsModifiers) {
    return await GroupModifier.createMany(groupsModifiers)
  }

  private async createPivotsGroupsMidifiersModifiers(pivots) {
    return await Database.insertQuery().table('group_modifiers_modifier').multiInsert(pivots)
  }

  private async createPivotsProductsGroupsMidifiers(pivots) {
    return await Database.insertQuery().table('product_group_modifiers').multiInsert(pivots)
  }

  private async createProducts(products) {
    return await Product.createMany(products)
  }
  private async createCategories(categories) {
    return await Category.createMany(categories)
  }

  private getGoodsImages(goods) {
    return goods.reduce((acc, item) => {
      if (item.images?.length) {
        item.images.forEach((image) => {
          acc.push({
            id: image.imageId,
            url: image.imageUrl,
            parentId: item.id,
          })
        })
      }

      return acc
    }, [])
  }

  private downloadImages(images) {
    const imageService = new ImageService(
      {
        XS: [200, 200],
        SM: [300, 300],
        MD: [400, 400],
        LG: [500, 500],
        XL: [600, 600],
      },
      ['png', 'webp']
    )

    images.forEach((image) => imageService.download(image.url))
  }
}
