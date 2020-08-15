import { IQuestion } from "@models/Question";

import { ISearch } from "@models/Search";

export interface ICreateQuestion {
  save(question: IQuestion): Promise<string>;
  updateSearchToIncresesAQuestion(
    searchId: string,
    search: ISearch,
    questionId: string
  ): Promise<void>;
}
