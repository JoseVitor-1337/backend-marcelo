import GetAdministerUseCase from "./GetAdminister";
import { GetAdministerFromDatabase } from "@domain/administer";

const GetAdminister = new GetAdministerUseCase(new GetAdministerFromDatabase());

export { GetAdminister };
