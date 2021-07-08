import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateProductValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    iikoId: schema.string(),
    code: schema.string(),
    active: schema.number(),
    name: schema.string(),
    slug: schema.string(),
    composition: schema.string(),
    description: schema.string(),
    weight: schema.number(),
    measureUnit: schema.string(),
    price: schema.number(),
    energyAmount: schema.number(),
    energyFullAmount: schema.number(),
    fiberAmount: schema.number(),
    fiberFullAmount: schema.number(),
    fatAmount: schema.number(),
    fatFullAmount: schema.number(),
    carbohydrateAmount: schema.number(),
    carbohydrateFullAmount: schema.number(),
    categoryId: schema.number(),
  })
  public messages = {}
}
