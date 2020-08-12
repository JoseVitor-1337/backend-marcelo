import CreateResearcherUseCase from "./CreateResearcherUseCase";
import { SaveResearcherToDatabase } from "@database/researcher";

const CreateResearcher = new CreateResearcherUseCase(
  new SaveResearcherToDatabase()
);

export { CreateResearcher };
