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
exports.UpdateQuestionUseCase = void 0;
class UpdateQuestionUseCase {
    constructor(updateQuestion) {
        this.updateQuestion = updateQuestion;
    }
    update(questionId, question) {
        return __awaiter(this, void 0, void 0, function* () {
            const HasQuestion = yield this.updateQuestion.findQuestionById(questionId);
            if (!HasQuestion) {
                throw new Error("Esta pergunta não existe");
            }
            const updatedQuestion = yield this.updateQuestion.update(questionId, question);
            return updatedQuestion;
        });
    }
}
exports.UpdateQuestionUseCase = UpdateQuestionUseCase;
