import { IStatus } from "@models/Search";
import { IParticipantAnswerSearch } from "@protocols/search/IParticipantAnswerSearch";
import { IGetSearch } from "@protocols/search/IGetSearch";

class ParticipantAnswerSearchUseCase {
  constructor(
    private addParticipantResponses: IParticipantAnswerSearch,
    private getSearch: IGetSearch
  ) {}

  async update(searchId: string, status: IStatus) {
    const search = await this.getSearch.findSearch(searchId);

    if (!searchId) {
      throw new Error("Pesquisa não encontrada");
    }
    const verifiedStatus = await this.addParticipantResponses.verifyStatusOfParticipant(
      search,
      status
    );

    const updatedSearch = await this.addParticipantResponses.updateStatusOfParticipantInSearch(
      verifiedStatus,
      searchId
    );

    return updatedSearch;
  }
}

export default ParticipantAnswerSearchUseCase;
