import { ICreateQuestion } from "@protocols/question/ICreateQuestion";
import Question, { IQuestion } from "@models/Question";
import Search, { ISearch } from "@models/Search";

class SaveQuestionsIntoDatabase implements ICreateQuestion {
  async questionMustHaveACorrectAnswer(questionId: any, question: IQuestion) {
    const hasCorrectQuestion = question.alternatives.filter((question) => {
      return question.correct === true;
    });

    if (hasCorrectQuestion.length > 0 === false) {
      await Question.findByIdAndDelete(questionId);

      return false;
    } else {
      return true;
    }
  }
  async save(question: IQuestion) {
    const newQuestion = await Question.create(question);

    return newQuestion._id;
  }

  async updateSearchToIncresesAQuestion(
    searchId: string,
    search: ISearch,
    questionId: string
  ) {
    await Search.findByIdAndUpdate(
      searchId,
      {
        questions: [...search.questions, questionId],
      },
      {
        new: true,
        lean: true,
        runValidators: true,
      }
    );
  }
}

export { SaveQuestionsIntoDatabase };
