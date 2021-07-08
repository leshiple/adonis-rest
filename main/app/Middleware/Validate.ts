import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ValidationExeption from 'App/Exceptions/ValidationExeption'

export default class Validate {
  public async handle(
    { request }: HttpContextContract,
    next: () => Promise<void>,
    validators: string[]
  ) {
    const loadModule = () => import(`App/Validators/${validators[0]}`)
    const { default: validator } = await loadModule()
    try {
      await request.validate(validator)
    } catch (e) {
      throw new ValidationExeption(
        validator.responseCode,
        validator.responseMessage,
        e.messages.errors
      )
    }

    await next()
  }
}
