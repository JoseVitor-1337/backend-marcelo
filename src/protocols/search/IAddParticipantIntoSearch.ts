import { ISearch } from "@models/Search";

export interface IAddParticipantIntoSearch {
  updateSearchToAddParticipant(
    searchId: string,

    participantId: string
  ): Promise<ISearch>;
}
