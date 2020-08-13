export interface IUserPayload {
  id: string;
  password: string;
  type: string;
}

export interface IToken {
  token: string;
}

export interface IMakeAuthentication {
  generateAcessToken(userPayload: IUserPayload): Promise<string>;
  hasMatchThePassword(userPassword: string, password: string): void;
  findUserTypeByEmail(email: string): Promise<IUserPayload>;
}
