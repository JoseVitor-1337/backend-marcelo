import CreateAdministerUseCase from "./CreateAdministerUseCase";
import { SavaAdministerIntoDatabase } from "@domain/administer";

const CreateAdminister = new CreateAdministerUseCase(
  new SavaAdministerIntoDatabase()
);

export { CreateAdminister };
