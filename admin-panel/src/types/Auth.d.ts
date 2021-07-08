export interface LoginPayload {
  email: string,
  password: string,
}

export type Login = (payload: LoginPayload) => Promise<boolean>;

export type SignupPayload = LoginPayload

export type Signup = (payload: SignupPayload) => Promise<boolean>;
