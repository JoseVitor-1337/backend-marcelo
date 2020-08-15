import { ISearch } from "@models/Search";

export interface IGetSearch {
  findSearch(searchId: string): Promise<ISearch>;
}
