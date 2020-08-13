import CreateResearcherUseCase from "./CreateResearcherUseCase";
import { SaveResearcherToDatabase } from "@domain/researcher";

const CreateResearcher = new CreateResearcherUseCase(
  new SaveResearcherToDatabase()
);

export { CreateResearcher };
