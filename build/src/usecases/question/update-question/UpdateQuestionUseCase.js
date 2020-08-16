"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionUseCase = void 0;
class UpdateQuestionUseCase {
    constructor(updateQuestion) {
        this.updateQuestion = updateQuestion;
    }
    async update(questionId, question) {
        const HasQuestion = await this.updateQuestion.findQuestionById(questionId);
        if (!HasQuestion) {
            throw new Error("Esta pergunta não existe");
        }
        const updatedQuestion = await this.updateQuestion.update(questionId, question);
        return updatedQuestion;
    }
}
exports.UpdateQuestionUseCase = UpdateQuestionUseCase;
