import { IAdminister } from "@models/Administer";

export interface IGetAdminister {
  find(id: string): Promise<IAdminister>;
}
