import { ISearch } from "@models/Search";

export interface ISearchFilters {
  title: string;
  researcher: string;
  content: string;
}

export interface ICreateSearch {
  findSearch(searchFilters: ISearchFilters): Promise<boolean>;
  save(search: ISearch): Promise<ISearch>;
}
