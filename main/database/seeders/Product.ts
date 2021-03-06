import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class ProductSeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await Product.createMany([
      {
        id: 1211,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий',
        slug: 'salat_grecheskiy',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 1,
      },
      {
        id: 1212,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий2',
        slug: 'salat_grecheskiy2',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 1,
      },
      {
        id: 1213,
        iikoId: 'safasfd3',
        code: 'sfdjlk2343',
        active: 1,
        name: 'Салат греческий3',
        slug: 'salat_grecheskiy3',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 1,
      },
      {
        id: 1214,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий4',
        slug: 'salat_grecheskiy4',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 1,
      },
      {
        id: 1215,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий5',
        slug: 'salat_grecheskiy5',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 1,
      },
      {
        id: 1216,
        iikoId: 'safasfd3',
        code: 'sfdjlk2343',
        active: 1,
        name: 'Салат греческий6',
        slug: 'salat_grecheskiy6',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 1,
      },
      {
        id: 1217,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий7',
        slug: 'salat_grecheski7',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 1218,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий8',
        slug: 'salat_grecheskiy8',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 1219,
        iikoId: 'safasfd3',
        code: 'sfdjlk2343',
        active: 1,
        name: 'Салат греческий9',
        slug: 'salat_grecheskiy9',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 12203254,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий',
        slug: 'salat_grecheskiy',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 12345212,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий2',
        slug: 'salat_grecheskiy2',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 121456723,
        iikoId: 'safasfd3',
        code: 'sfdjlk2343',
        active: 1,
        name: 'Салат греческий3',
        slug: 'salat_grecheskiy3',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 121161,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий',
        slug: 'salat_grecheskiy',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 12187652,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий2',
        slug: 'salat_grecheskiy2',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 12176543,
        iikoId: 'safasfd3',
        code: 'sfdjlk2343',
        active: 1,
        name: 'Салат греческий3',
        slug: 'salat_grecheskiy3',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 12234511,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий',
        slug: 'salat_grecheskiy',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 1256712,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий2',
        slug: 'salat_grecheskiy2',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 12654313,
        iikoId: 'safasfd3',
        code: 'sfdjlk2343',
        active: 1,
        name: 'Салат греческий3',
        slug: 'salat_grecheskiy3',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 1267411,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий',
        slug: 'salat_grecheskiy',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 1253454312,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий2',
        slug: 'salat_grecheskiy2',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 123433413,
        iikoId: 'safasfd3',
        code: 'sfdjlk2343',
        active: 1,
        name: 'Салат греческий3',
        slug: 'salat_grecheskiy3',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 2,
      },
      {
        id: 121143,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий',
        slug: 'salat_grecheskiy',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
      {
        id: 121432,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий2',
        slug: 'salat_grecheskiy2',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
      {
        id: 3432343,
        iikoId: 'safasfd3',
        code: 'sfdjlk2343',
        active: 1,
        name: 'Салат греческий3',
        slug: 'salat_grecheskiy3',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
      {
        id: 543211,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий',
        slug: 'salat_grecheskiy',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
      {
        id: 5434512,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий2',
        slug: 'salat_grecheskiy2',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
      {
        id: 6534513,
        iikoId: 'safasfd3',
        code: 'sfdjlk2343',
        active: 1,
        name: 'Салат греческий3',
        slug: 'salat_grecheskiy3',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
      {
        id: 654311,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий',
        slug: 'salat_grecheskiy',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
      {
        id: 3465432,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий2',
        slug: 'salat_grecheskiy2',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
      {
        id: 543453,
        iikoId: 'safasfd3',
        code: 'sfdjlk2343',
        active: 1,
        name: 'Салат греческий3',
        slug: 'salat_grecheskiy3',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
      {
        id: 6523511,
        iikoId: 'safasfd',
        code: 'sfdjlk234',
        active: 1,
        name: 'Салат греческий',
        slug: 'salat_grecheskiy',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
      {
        id: 1245612,
        iikoId: 'safasfd2',
        code: 'sfdjlk2342',
        active: 1,
        name: 'Салат греческий2',
        slug: 'salat_grecheskiy2',
        composition: 'Сыр и оливки',
        description: 'Вкусный салат',
        energyAmount: 10,
        energyFullAmount: 100,
        fiberAmount: 8,
        fiberFullAmount: 24,
        fatAmount: 56,
        fatFullAmount: 134,
        carbohydrateAmount: 12,
        carbohydrateFullAmount: 45,
        weight: 230,
        measureUnit: 'гр',
        price: 430,
        categoryId: 3,
      },
    ])
  }
}
