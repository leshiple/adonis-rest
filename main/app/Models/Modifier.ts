import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Modifier extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public iikoId: string

  @column()
  public name: string

  @column()
  public energyFullAmount: number

  @column()
  public fiberFullAmount: number

  @column()
  public fatFullAmount: number

  @column()
  public carbohydrateFullAmount: number

  @column()
  public weight: number

  @column()
  public price: number

  @column()
  public minAmount: number

  @column()
  public maxAmount: number

  @column()
  public defaultAmount: number

  @column()
  public required: number

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
