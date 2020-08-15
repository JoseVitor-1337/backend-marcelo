import GetSearchsUseCase from "./GetSearchsUseCase";
import { GetSearchFromDatabase } from "@domain/search/GetSearchFromDatabase";

const GetSearchs = new GetSearchsUseCase(new GetSearchFromDatabase());

export { GetSearchs };
