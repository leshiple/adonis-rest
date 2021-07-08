import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Category from 'App/Models/Category'

export default class CategorySeeder extends BaseSeeder {
  public static developmentOnly = true

  public async run() {
    await Category.createMany([
      {
        iikoId: '234234234',
        order: 1,
        active: 1,
        name: 'Салаты',
        slug: 'salads',
      },
      {
        iikoId: '632454',
        order: 2,
        active: 1,
        name: 'Супы',
        slug: 'sypi',
      },
      {
        iikoId: '876543456',
        order: 3,
        active: 1,
        name: 'Горячее',
        slug: 'gorayachee',
      },
    ])
  }
}
