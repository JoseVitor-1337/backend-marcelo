import { ICreateQuestion } from "@protocols/question/ICreateQuestion";
import { IQuestion } from "@models/Question";
import { IGetSearchs } from "@protocols/search/IGetSearchs";

class CreateQuestionUseCase {
  constructor(
    private createQuestion: ICreateQuestion,
    private getSearch: IGetSearchs
  ) {}

  async create(searchId: string, question: IQuestion) {
    const search = await this.getSearch.findSearchByid(searchId);

    if (!search) {
      throw new Error("A pergunta deve estar atrelada a uma pesquisa");
    }

    const questionId = await this.createQuestion.save(question);

    const hasCorrectQuestions = await this.createQuestion.questionMustHaveACorrectAnswer(
      questionId,
      question
    );

    if (hasCorrectQuestions === false) {
      throw new Error("A pergunta deve ter pelo menos uma resposta certa");
    }

    if (question)
      await this.createQuestion.updateSearchToIncresesAQuestion(
        searchId,
        search,
        questionId
      );
  }
}

export { CreateQuestionUseCase };
