import { IParticipant } from "@models/Participant";

export interface ICreateParticipant {
  findByEmail(email: string): Promise<boolean>;
  save(participant: IParticipant): Promise<void>;
}
