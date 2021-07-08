import { Exception } from '@adonisjs/core/build/standalone'

export default class ValidationException extends Exception {
  public errors

  constructor(code, message, errors) {
    super(message, 409, code)
    this.errors = errors
  }
}
