import MakeAuthenticationUseCase from "./MakeAuthenticationUseCase";
import { MakeAuthentication } from "@domain/authentication";

const Authentication = new MakeAuthenticationUseCase(new MakeAuthentication());

export { Authentication };
