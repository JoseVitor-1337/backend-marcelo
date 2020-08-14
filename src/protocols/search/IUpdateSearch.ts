export interface IUpdateSearch {}
import { ISearch } from "@models/Search";

export interface ISearchFilters {
  title: string;
  researcher: string;
  content: string;
}

export interface IUpdateSearch {
  update(searchId: string, search: ISearch): Promise<ISearch>;
}
