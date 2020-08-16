"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuestionUseCase = void 0;
class CreateQuestionUseCase {
    constructor(createQuestion, getSearch) {
        this.createQuestion = createQuestion;
        this.getSearch = getSearch;
    }
    create(searchId, question) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield this.getSearch.findSearchByid(searchId);
            if (!search) {
                throw new Error("A pergunta deve estar atrelada a uma pesquisa");
            }
            const questionId = yield this.createQuestion.save(question);
            const hasCorrectQuestions = yield this.createQuestion.questionMustHaveACorrectAnswer(questionId, question);
            if (hasCorrectQuestions === false) {
                throw new Error("A pergunta deve ter pelo menos uma resposta certa");
            }
            if (question)
                yield this.createQuestion.updateSearchToIncresesAQuestion(searchId, search, questionId);
        });
    }
}
exports.CreateQuestionUseCase = CreateQuestionUseCase;
