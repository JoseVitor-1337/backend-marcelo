import { IParticipant } from "@models/Participant";

export interface ICreateParticipant {
  findByEmailTheParticipant(email: string): Promise<boolean>;
  findByEmailTheResearcher(email: string): Promise<boolean>;
  save(participant: IParticipant): Promise<void>;
}
