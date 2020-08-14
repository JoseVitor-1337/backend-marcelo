import { IUpdateQuestion } from "@protocols/question/IUpdateQuestion";
import Question, { IQuestion } from "@models/Question";

class UpdateQuestionFromDatabase implements IUpdateQuestion {
  async findQuestionById(questionId: string): Promise<boolean> {
    const hasQuestions = await Question.findById(questionId).lean();

    return hasQuestions ? true : false;
  }

  async update(questionId: string, question: IQuestion): Promise<IQuestion> {
    const updatedQuestion = await Question.findByIdAndUpdate(
      questionId,
      question,
      {
        new: true,
        lean: true,
        runValidators: true,
      }
    );

    return updatedQuestion;
  }
}

export { UpdateQuestionFromDatabase };
