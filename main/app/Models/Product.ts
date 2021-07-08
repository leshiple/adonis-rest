import { DateTime } from 'luxon'
import slug from 'slug'
import {
  column,
  BaseModel,
  belongsTo,
  BelongsTo,
  manyToMany,
  ManyToMany,
  beforeSave,
} from '@ioc:Adonis/Lucid/Orm'
import Image from 'App/Models/Image'
import GroupModifier from 'App/Models/GroupModifier'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public iikoId: string

  @column()
  public code: string

  @column()
  public active: number

  @column()
  public name: string

  @column()
  public slug: string

  @column()
  public composition: string

  @column()
  public description: string

  @column()
  public energyAmount: number

  @column()
  public energyFullAmount: number

  @column()
  public fiberAmount: number

  @column()
  public fiberFullAmount: number

  @column()
  public fatAmount: number

  @column()
  public fatFullAmount: number

  @column()
  public carbohydrateAmount: number

  @column()
  public carbohydrateFullAmount: number

  @column()
  public weight: number

  @column()
  public measureUnit: string

  @column()
  public price: number

  @column()
  public categoryId: number

  @column({ serializeAs: null })
  public imageId: number

  @belongsTo(() => Image)
  public image: BelongsTo<typeof Image>

  @manyToMany(() => GroupModifier, {
    pivotRelatedForeignKey: 'group_modifiers_id',
    pivotTable: 'product_group_modifiers',
    pivotColumns: ['min_amount', 'max_amount', 'required'],
  })
  public groupsModifiers: ManyToMany<typeof GroupModifier>

  @column.dateTime({ autoCreate: true, serializeAs: null })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(product: Product) {
    if (!product.$dirty.slug && product.$dirty.name) {
      product.slug = slug(product.$dirty.name)
    }
  }
}
