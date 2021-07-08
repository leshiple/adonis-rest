import { DateTime } from 'luxon'
import slug from 'slug'
import { BaseModel, column, hasMany, HasMany, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Product from 'App/Models/Product'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public iikoId: string

  @column()
  public order: number

  @column()
  public active: number

  @column()
  public name: string

  @column()
  public slug: string

  @hasMany(() => Product)
  public products: HasMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(category: Category) {
    if (!category.$dirty.slug && category.$dirty.name) {
      category.slug = slug(category.$dirty.name)
    }
  }
}
