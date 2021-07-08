const messages = {
  ACCESS_ERROR: 'Permission denied',

  VALIDATION_PASSWORD_INVALID:
    'Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.',
  VALIDATION_PASSWORD_RESET_TOKEN_EMPTY: 'Password reset token is empty',
  VALIDATION_EMAIL_EMPTY: 'Email cannot be empty',
  VALIDATION_EMAIL_INVALID: 'Email is not valid',
  VALIDATION_EMAIL_VERIFICATION_TOKEN_EMPTY: 'Email verification token is empty',
  VALIDATION_UPDLOAD_PRODUCT_IMAGE: 'Invalid product image',

  LANGUAGE_NOT_AVAILABLE_LANGUAGE: 'Not available language',

  USER_EXISTS_ERROR: 'User with this email already created',
  USER_NOT_FOUND_ERROR: 'User not found',
  USER_SUCCESS_FOUND: 'User success found',

  AUTH_INVALID_CRIDENTIALS: 'Invalid cridentials',
  AUTH_EMAIL_TOKEN_VERIFICATION_INVALID: 'Email verification token is invalid',
  AUTH_EMAIL_TOKEN_VERIFICATION_EXPIRED: 'Email verification token timeout expired',
  AUTH_EMAIL_ALREADY_VERIFIED: 'Email already verified',
  AUTH_EMAIL_VERIFICATION_TOKEN_WRONG: 'Email verification token wrong',
  AUTH_PASSWORD_WRONG: 'Password wrong',
  AUTH_PASSWORD_RESET_TOKEN_VERIFICATION_EXPIRED: 'Password reset token timeout expired',
  AUTH_PASSWORD_RESET_TOKEN_VERIFICATION_INVALID: 'Password reset token is invalid',
  AUTH_PASSWORD_TOKEN_WRONG: 'Password reset token incorrect',
  AUTH_NEW_PASSWORD_WRONG: 'The new password must be different from the old one',
  AUTH_NOT_VERIFIED_EMAIL: 'Email not verified',
  AUTH_SUCCESS_LOGIN: 'Success login',
  AUTH_SUCCESS_ME: 'Success me',
  AUTH_SUCCESS_SIGNUP: 'Success signup',
  AUTH_SUCCESS_LOGOUT: 'Success logout',
  AUTH_SUCCESS_VERIFY_EMAIL: 'Success email verify',
  AUTH_SUCCESS_SEND_EMAIL_VERIFICATION: 'Success send email verification',
  AUTH_SUCCESS_SEND_PASSWORD_RESET_TOKEN: 'Success send password reset token',
  AUTH_SUCCESS_RESET_PASSWORD: 'Success reset password',

  PRODUCTS_SUCCESS_FIND: 'Success find products',
  PRODUCT_SUCCESS_FIND: 'Success find product',
  PRODUCT_SUCCESS_CREATE: 'Succes create product',

  CATEGORIES_SUCCESS_FIND: 'Success find categories',
  CATEGORY_SUCCESS_FIND: 'Success find category',

  FILES_SUCCESS_FIND: 'Success find files',
  FILE_PRODUCT_IMAGE_SUCCESS_UPLOAD: 'Success upload product image',
}

export interface ResonseCode {
  code: string
  message: string
}

export default new Proxy(messages, {
  get(target, prop): ResonseCode | undefined {
    const isExistProp = prop in target

    if (typeof prop === 'string' && isExistProp) {
      return {
        code: prop,
        message: target[prop],
      }
    }
  },
})
