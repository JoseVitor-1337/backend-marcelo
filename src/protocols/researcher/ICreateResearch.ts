import { IResearcher } from "@models/Researcher";

export interface ICreateResearcher {
  findByEmailTheParticipant(email: string): Promise<boolean>;
  findByEmailTheResearcher(email: string): Promise<boolean>;
  save(participant: IResearcher): Promise<void>;
}
