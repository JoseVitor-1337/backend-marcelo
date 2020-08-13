import { IMakeAuthentication } from "@protocols/authentication";

class MakeAuthenticationUseCase {
  constructor(private authentication: IMakeAuthentication) {}

  async makeAuthentication(email: string, password: string): Promise<string> {
    let user = await this.authentication.findUserTypeByEmail(email);

    let hasMatch = await this.authentication.hasMatchThePassword(
      user.password,
      password
    );

    if (!hasMatch) {
      throw new Error("Email e/ou senha inválidos");
    }

    const token = await this.authentication.generateAcessToken(user);

    return token;
  }
}

export default MakeAuthenticationUseCase;
