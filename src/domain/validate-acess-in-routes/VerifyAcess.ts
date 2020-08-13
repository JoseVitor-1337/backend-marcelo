import jwt from "jsonwebtoken";
import { API_SECRET } from "src/config/enviroment";
import { IVarifyIfHasAcess } from "@protocols/validate-acess-in-routes";

class VerifyAcess implements IVarifyIfHasAcess {
  async hasToken(token: string) {
    if (!token) {
      throw new Error("Você não tem authorização!");
    }
  }

  decodedToken(token: string) {
    let decodedToken = jwt.verify(token, API_SECRET);

    if (!decodedToken) {
      throw new Error("Erro no sistema, tente novamente");
    }

    return decodedToken;
  }
}

export { VerifyAcess };
