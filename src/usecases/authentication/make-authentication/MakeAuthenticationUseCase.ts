import { IMakeAuthentication } from "@protocols/authentication";

class MakeAuthenticationUseCase {
  constructor(private authentication: IMakeAuthentication) {}

  async makeAuthentication(email: string, password: string): Promise<string> {
    let user = await this.authentication.findUserTypeByEmail(email);

    this.authentication.hasMatchThePassword(user.password, password);

    return await this.authentication.generateAcessToken(user);
  }
}

export default MakeAuthenticationUseCase;
