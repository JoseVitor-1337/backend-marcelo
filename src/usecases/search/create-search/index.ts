import CreateSearchUseCase from "./CreateSearchUseCase";
import { SaveSearchintoDatabase } from "@domain/search";
import { GetResearcherFromDatabase } from "@domain/researcher";

const CreateSearch = new CreateSearchUseCase(
  new SaveSearchintoDatabase(),
  new GetResearcherFromDatabase()
);

export { CreateSearch };
