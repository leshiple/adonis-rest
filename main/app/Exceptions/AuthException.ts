import { Exception } from '@adonisjs/core/build/standalone'

export default class AuthException extends Exception {
  constructor(code, message) {
    super(message, 409, code)
  }
}
