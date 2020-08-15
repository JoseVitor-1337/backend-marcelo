import { ISearch } from "@models/Search";
import { ISearchFilters } from "./IGetSearchs";

export interface ICreateSearch {
  findSearch(searchFilters: ISearchFilters): Promise<boolean>;
  save(search: ISearch): Promise<ISearch>;
}
