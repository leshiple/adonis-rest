export default {
  getEmailVerificationToken(): string | null {
    return this.getSearchParam('emailVerificationToken');
  },
  getPasswordResetToken(): string | null {
    return this.getSearchParam('passwordResetToken');
  },
  getSearchParam(name: string): string | null {
    const url = new URL(document.location.href);
    return url.searchParams.get(name);
  },
};
