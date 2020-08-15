export interface IUserPayload {
  id: string;
  password: string;
}

export interface IMakeAuthentication {
  generateAcessToken(userPayload: IUserPayload): Promise<string>;
  hasMatchThePassword(userPassword: string, password: string): Promise<boolean>;
  findUserTypeByEmail(email: string): Promise<IUserPayload>;
}
