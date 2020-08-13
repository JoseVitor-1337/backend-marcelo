import MakeAuthenticationUseCase from "./MakeAuthenticationUseCase";
import { MakeAuthentication } from "@database/authentication";

const Authentication = new MakeAuthenticationUseCase(new MakeAuthentication());

export { Authentication };
