import { ISearch } from "@models/Search";

export interface IUpdateSearch {
  update(searchId: string, search: ISearch): Promise<ISearch>;
}
