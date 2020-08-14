import { IQuestion } from "@models/Question";

export interface IUpdateQuestion {
  findQuestionById(questionId: string): Promise<boolean>;
  update(questionId: string, question: IQuestion): Promise<IQuestion>;
}
