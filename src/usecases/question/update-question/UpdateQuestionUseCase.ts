import { IQuestion } from "@models/Question";
import { IUpdateQuestion } from "@protocols/question/IUpdateQuestion";

class UpdateQuestionUseCase {
  constructor(private updateQuestion: IUpdateQuestion) {}

  async update(questionId: string, question: IQuestion) {
    const HasQuestion = await this.updateQuestion.findQuestionById(questionId);

    if (!HasQuestion) {
      throw new Error("Esta pergunta não existe");
    }

    const updatedQuestion = await this.updateQuestion.update(
      questionId,
      question
    );

    return updatedQuestion;
  }
}

export { UpdateQuestionUseCase };
