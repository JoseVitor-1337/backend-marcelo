import { ISearch } from "@models/Search";

export interface IFindSearch {
  researcher: string;
  title: string;
  content: string;
}

export interface ICreateSearch {
  findSearchByFilters(searchFilters: IFindSearch): Promise<boolean>;
  save(search: ISearch): Promise<ISearch>;
}
