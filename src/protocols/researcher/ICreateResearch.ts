import { IResearcher } from "@models/Researcher";

export interface ICreateResearcher {
  findByEmail(email: string): Promise<boolean>;
  save(participant: IResearcher): Promise<void>;
}
