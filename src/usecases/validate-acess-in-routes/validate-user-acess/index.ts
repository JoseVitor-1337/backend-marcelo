import ValidateUserAcessUseCase from "./ValidateUserAcessUseCase";
import { VerifyAcessInRoutes } from "@domain/validate-acess-in-routes/VerifyAcessInRoutes";

let ValidadeUserAcess = new ValidateUserAcessUseCase(new VerifyAcessInRoutes());

export { ValidadeUserAcess };
