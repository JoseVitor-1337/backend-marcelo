"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestionUseCase = void 0;
class CreateQuestionUseCase {
    constructor(createQuestion, getSearch) {
        this.createQuestion = createQuestion;
        this.getSearch = getSearch;
    }
    async create(searchId, question) {
        const search = await this.getSearch.findSearchByid(searchId);
        if (!search) {
            throw new Error("A pergunta deve estar atrelada a uma pesquisa");
        }
        const questionId = await this.createQuestion.save(question);
        const hasCorrectQuestions = await this.createQuestion.questionMustHaveACorrectAnswer(questionId, question);
        if (hasCorrectQuestions === false) {
            throw new Error("A pergunta deve ter pelo menos uma resposta certa");
        }
        if (question)
            await this.createQuestion.updateSearchToIncresesAQuestion(searchId, search, questionId);
    }
}
exports.CreateQuestionUseCase = CreateQuestionUseCase;
