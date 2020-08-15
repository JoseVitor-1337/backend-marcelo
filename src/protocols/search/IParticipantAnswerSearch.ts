import { ISearch, IStatus } from "@models/Search";

export interface IParticipantAnswerSearch {
  verifyStatusOfParticipant(search: ISearch, status: IStatus): Promise<ISearch>;
  updateStatusOfParticipantInSearch(
    search: ISearch,
    searchId: string
  ): Promise<ISearch>;
}
