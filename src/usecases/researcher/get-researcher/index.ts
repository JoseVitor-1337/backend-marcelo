import GetResearcherUseCase from "./GetResearcherUseCase";
import { GetResearcherFromDatabase } from "@domain/researcher";

const GetResearcher = new GetResearcherUseCase(new GetResearcherFromDatabase());

export { GetResearcher };
