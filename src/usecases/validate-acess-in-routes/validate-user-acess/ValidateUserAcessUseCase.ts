import { IVarifyIfHasAcess } from "@protocols/validate-acess-in-routes";

class ValidateUserAcessUseCase {
  constructor(private validateUserAcess: IVarifyIfHasAcess) {}

  async hasAcessToRoutes(token: string) {
    this.validateUserAcess.hasToken(token);

    let decoded = this.validateUserAcess.decodedToken(token);

    return decoded;
  }
}

export default ValidateUserAcessUseCase;
