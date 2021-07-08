import { uniqBy } from 'lodash'
import Product from 'App/Models/Product'
import responseCodes, { ResonseCode } from './responseCodes'
import IikoService from '../../../services/IikoService'

export default class ProductsController {
  public async index({ request }) {
    const { page = 1, rowsPerPage = 10, sortBy = 'id', descending = false } = request.qs()

    const order = descending === 'true' ? 'desc' : 'asc'
    const limit = rowsPerPage ? rowsPerPage : Infinity
    const products = await Product.query().orderBy(sortBy, order).paginate(page, limit)
    const productsJson = products.serialize()

    const { code, message } = responseCodes.PRODUCTS_SUCCESS_FIND as unknown as ResonseCode

    return {
      code,
      message,
      body: productsJson,
    }
  }
  public async show({ params }) {
    const { id } = params

    const product = await Product.find(id)

    await product?.load('image')
    await product?.load('groupsModifiers', (groupsModifiersQuery) => {
      groupsModifiersQuery.preload('childModifiers')
    })

    console.log('0000000000000')
    console.log(product?.groupsModifiers[0])

    const { code, message } = responseCodes.PRODUCT_SUCCESS_FIND as unknown as ResonseCode

    return {
      code,
      message,
      body: {
        data: product,
      },
    }
  }

  public async store({ request }) {
    const body = request.body()
    const product = await Product.create(body)

    const { code, message } = responseCodes.PRODUCT_SUCCESS_CREATE as unknown as ResonseCode

    return {
      code,
      message,
      body: {
        data: product,
      },
    }
  }

  public async menu() {
    const iikoService = new IikoService()
    await iikoService.authenticate()
    const nomenclature = await iikoService.loadNomenclature()
    const { products, modifiers } = this.normalizeNomenclature(nomenclature)
    this.createModifiers(modifiers)
    // this.createProducts(products)
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

    const rawGroupModifiers = rawProducts.reduce((acc, item) => {
      if (item.groupModifiers.length) {
        return [...acc, ...item.groupModifiers]
      }
      return acc
    }, [])

    const modifiers = this.normalizeModifers(rawModifiers)
    const products = this.normalizeProducts(rawProducts)

    return {
      products,
      modifiers,
      // groupModifiers,
      categories: nomenclature.groups,
    }
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
      minAmount: 0,
      maxAmount: 0,
      defaultAmount: 0,
      required: 1,
    }))
  }

  private normalizeProducts(products) {
    return uniqBy(products, 'id').map((p) => ({
      ...p,
      iikoId: p.id,
    }))
  }

  private async createModifiers(modifiers) {
    const Modifier = (await import('App/Models/Modifier')).default
    const result = await Modifier.createMany(modifiers)
    console.log(result)
  }

  private async createProducts(products) {
    const Product = (await import('App/Models/Product')).default
    const result = await Product.createMany(products)
  }
}
