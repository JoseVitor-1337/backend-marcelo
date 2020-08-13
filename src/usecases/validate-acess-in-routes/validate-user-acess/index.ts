import ValidateUserAcessUseCase from "./ValidateUserAcessUseCase";
import { VerifyAcess } from "@domain/validate-acess-in-routes/VerifyAcess";

let ValidadeUserAcess = new ValidateUserAcessUseCase(new VerifyAcess());

export { ValidadeUserAcess };
