import { IGetParticipant } from "@protocols/participant";
import { IAddParticipantIntoSearch } from "@protocols/search/IAddParticipantIntoSearch";

class AddParticipantIntoSearchUseCase {
  constructor(
    private addParticipantIntoSearch: IAddParticipantIntoSearch,
    private getParticipant: IGetParticipant
  ) {}

  async update(searchId: string, participantId: string) {
    const participantExist = await this.getParticipant.find(participantId);

    if (!participantExist) {
      throw new Error("Participante não encontrado");
    }

    const updatedSearch = await this.addParticipantIntoSearch.updateSearchToAddParticipant(
      searchId,
      participantId
    );

    return updatedSearch;
  }
}

export default AddParticipantIntoSearchUseCase;
