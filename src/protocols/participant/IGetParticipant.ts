import { IParticipant } from "@models/Participant";

export interface IGetParticipant {
  find(id: string): Promise<IParticipant>;
}
