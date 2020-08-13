import { IParticipant } from "@models/Participant";

export interface IGetOneParticipant {
  get(id: string): Promise<IParticipant>;
}
