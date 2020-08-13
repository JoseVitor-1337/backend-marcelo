import { IResearcher } from "@models/Researcher";

export interface IGetResearcher {
  find(id: string): Promise<IResearcher>;
}
