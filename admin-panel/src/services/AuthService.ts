import ApiService, { LoginResponseBody } from './ApiService';

export default {
  async login(email: string, password: string): Promise<LoginResponseBody | boolean> {
    try {
      const response = await ApiService.login(email, password);
      return response.data.body;
    } catch (_) {
      return false;
    }
  },
  async signup(email: string, password: string): Promise<boolean> {
    try {
      await ApiService.signup(email, password);
      return true;
    } catch (_) {
      return false;
    }
  },
  async logout(): Promise<boolean> {
    try {
      await ApiService.logout();
      return true;
    } catch (_) {
      return false;
    }
  },
  async me(): Promise<LoginResponseBody | boolean> {
    try {
      const response = await ApiService.fetchMe();
      return response.data.body;
    } catch (_) {
      return false;
    }
  },
  async confirmEmail(emailVerificationToken: string): Promise<LoginResponseBody | boolean> {
    try {
      const response = await ApiService.confirmEmail(emailVerificationToken);
      return response.data.body;
    } catch (error) {
      const isAlreadyVerified = error.response.data.code === 'USER_EMAIL_ALREADY_VERIFIED';

      return Promise.resolve(isAlreadyVerified);
    }
  },
  async sendConfirmationEmail(email: string): Promise<boolean> {
    try {
      await ApiService.sendConfirmationEmail(email);
      return true;
    } catch (_) {
      return false;
    }
  },
  async forgotPassword(email: string): Promise<boolean> {
    try {
      await ApiService.forgotPassword(email);
      return true;
    } catch (_) {
      return false;
    }
  },
  async resetPassword(password: string, passwordResetToken: string): Promise<boolean> {
    try {
      await ApiService.resetPassword(password, passwordResetToken);
      return true;
    } catch (_) {
      return false;
    }
  },
};
