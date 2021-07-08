import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { ImageMime, ImageVariants } from '../../services/ImageService'

export default class Image extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public url: string

  @column()
  public mime: ImageMime

  @column()
  public width: number

  @column()
  public height: number

  @column()
  public size: number

  @column()
  public variants: ImageVariants

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
