import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import responseCodes, { ResonseCode } from 'App/Controllers/Http/responseCodes'

const { code, message } = responseCodes.VALIDATION_UPDLOAD_PRODUCT_IMAGE as unknown as ResonseCode

export default class UploadProductImageValidator {
  public static responseCode = code
  public static responseMessage = message

  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    image: schema.file({
      size: '2mb',
      extnames: ['jpg', 'png'],
    }),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
