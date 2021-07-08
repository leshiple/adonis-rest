import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Modifier from 'App/Models/Modifier'

export default class GroupModifier extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public iikoId: string

  @column()
  public name: string

  @column()
  public order: number

  @manyToMany(() => Modifier, {
    pivotForeignKey: 'group_modifiers_id',
    pivotTable: 'group_modifiers_modifier',
    pivotColumns: ['min_amount', 'max_amount', 'required'],
  })
  public childModifiers: ManyToMany<typeof Modifier>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public serializeExtras() {
    return {
      minAmount: this.$extras.pivot_min_amount,
      maxAmount: this.$extras.pivot_max_amount,
      required: this.$extras.pivot_required,
    }
  }
}
