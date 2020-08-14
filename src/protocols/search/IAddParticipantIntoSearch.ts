import { ISearch } from "@models/Search";

export interface IAddParticipantIntoSearch {
  updateSearchToAddParticipant(participantId: string): Promise<ISearch>;
}
