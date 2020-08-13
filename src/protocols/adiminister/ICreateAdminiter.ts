import { IAdminister } from "@models/Administer";

export interface ICreateAdminister {
  findByEmailTheParticipant(email: string): Promise<boolean>;
  findByEmailTheResearcher(email: string): Promise<boolean>;
  save(administer: IAdminister): Promise<void>;
}
