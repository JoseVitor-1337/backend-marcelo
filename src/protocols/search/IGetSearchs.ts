import { ISearch, IStatus } from "@models/Search";

export interface ISearchFilters {
  type?: string;
  title?: string;
}

export interface IPagination {
  page: number;
  itemPerPage: number;
}

export interface IGetSearchs {
  findSearchByid(searchId: string): Promise<ISearch>;

  findSearchToMakeCSVFile(searchId: string): Promise<ISearch>;

  findSearchByParticipantView(
    status: IStatus,
    filters: ISearchFilters,
    pagination: IPagination
  ): Promise<ISearch[]>;

  findAllSearchsForAdminister(
    filters: ISearchFilters,
    pagination: IPagination
  ): Promise<ISearch[]>;

  findSearchsOfResearcher(
    researchId: string,
    filters: ISearchFilters,
    pagination: IPagination
  ): Promise<ISearch[]>;
}
