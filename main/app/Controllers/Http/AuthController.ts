import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'
import AuthExeption from 'App/Exceptions/AuthException'
import responseCodes, { ResonseCode } from './responseCodes'

export default class AuthController {
  public async signup({ auth, request, response }: HttpContextContract) {
    const newPostSchema = schema.create({
      email: schema.string({ trim: true }),
      password: schema.string({ escape: true }),
    })

    try {
      await request.validate({
        schema: newPostSchema,
      })
    } catch (error) {
      response.status(409).send(error)
    }

    const email = request.input('email')
    const password = request.input('password')

    const user = await User.create({
      email,
      password,
    })

    await auth.use('web').login(user)

    const { code, message } = responseCodes.AUTH_SUCCESS_SIGNUP as unknown as ResonseCode

    return {
      code,
      message,
      body: {
        data: {
          success: true,
        },
      },
    }
  }
  public async login({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      const user = await User.findByOrFail('email', email)
      const { code, message } = responseCodes.AUTH_SUCCESS_LOGIN as unknown as ResonseCode
      return {
        code,
        message,
        body: {
          data: user,
        },
      }
    } catch {
      const { code, message } = responseCodes.AUTH_INVALID_CRIDENTIALS as unknown as ResonseCode
      throw new AuthExeption(code, message)
    }
  }
  public async logout({ auth }: HttpContextContract) {
    await auth.use('web').logout()
    const { code, message } = responseCodes.AUTH_SUCCESS_LOGOUT as unknown as ResonseCode

    return {
      code,
      message,
      body: {
        data: {
          success: true,
        },
      },
    }
  }
  public async me({ auth }: HttpContextContract) {
    await auth.use('web').authenticate()
    const user = auth.use('web').user

    const { code, message } = responseCodes.AUTH_SUCCESS_LOGOUT as unknown as ResonseCode

    return {
      code,
      message,
      body: {
        data: user,
      },
    }
  }
}
