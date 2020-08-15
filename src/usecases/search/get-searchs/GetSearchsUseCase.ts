import { IStatus } from "@models/Search";
import { IGetSearchs, ISearchFilters, IPagination } from "@protocols/search";

class GetSearchsUseCase {
  constructor(private getSearchs: IGetSearchs) {}

  async toParticipants(
    status: IStatus,
    filters: ISearchFilters,
    pagination: IPagination
  ) {
    const searchsForParticipants = await this.getSearchs.findSearchByParticipantView(
      status,
      filters,
      pagination
    );

    return searchsForParticipants;
  }

  async toAdminsiters(filters: ISearchFilters, pagination: IPagination) {
    const searchsForTheAdminister = await this.getSearchs.findAllSearchsForAdminister(
      filters,
      pagination
    );

    return searchsForTheAdminister;
  }

  async toResearchers(
    researcherId: any,
    filters: ISearchFilters,
    pagination: IPagination
  ) {
    const searchsSeachsOfResearcher = await this.getSearchs.findSearchsOfResearcher(
      researcherId,
      filters,
      pagination
    );

    return searchsSeachsOfResearcher;
  }
}

export default GetSearchsUseCase;
