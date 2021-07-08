interface ErrorResponse {
  code: string,
  status: number,
  message: string,
}

const messages: {[key:string]: string} = {
  AUTH_INVALID_CRIDENTIALS: 'Некорректные доступы',
  AUTH_NOT_VERIFIED_EMAIL: 'Необходимо подтвердить email. Проверьте почту',
  AUTH_EMAIL_TOKEN_VERIFICATION_INVALID: 'Токен подтверждения email некорректный',
  AUTH_PASSWORD_RESET_TOKEN_VERIFICATION_INVALID: 'Токен сброса пароля некорректный',
  AUTH_SUCCESS_RESET_PASSWORD: 'Пароль успешно обновлен',
  ACCESS_ERROR: 'Отказано в доступе',
  USER_NOT_FOUND_ERROR: 'Пользователь с таким email не найден',
  USER_EXISTS_ERROR: 'Пользователь с таким email уже существует',
  USER_EMAIL_ALREADY_VERIFIED: 'Данный email уже подтвержден',
  USER_NEW_PASSWORD: 'Новый пароль должен отличаться от старого',
};

const DEFAULT_MESSAGE = 'Что-то пошло не так';

export default {
  getErrorMessage(errorResponse: ErrorResponse): string {
    const { code } = errorResponse;

    if (Object.hasOwnProperty.call(messages, code)) {
      return messages[code];
    }

    return DEFAULT_MESSAGE;
  },
};
