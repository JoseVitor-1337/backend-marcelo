import { ICreateQuestion } from "@protocols/question/ICreateQuestion";
import Question, { IQuestion } from "@models/Question";
import Search, { ISearch } from "@models/Search";

class SaveQuestionsIntoDatabase implements ICreateQuestion {
  async findSearchForTheQuestion(searchId: string) {
    const hasSearch = await Search.findById(searchId).lean();

    return hasSearch;
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
    console.log(search, questionId);

    const newSearch = await Search.findByIdAndUpdate(
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

    console.log(newSearch);
  }
}

export { SaveQuestionsIntoDatabase };
