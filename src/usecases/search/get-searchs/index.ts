import GetSearchsUseCase from "./GetSearchsUseCase";
import { GetSearchFromDatabase } from "@domain/search";

const GetSearchs = new GetSearchsUseCase(new GetSearchFromDatabase());

export { GetSearchs };
