"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateQuestionFromDatabase = void 0;
const Question_1 = __importDefault(require("@models/Question"));
class UpdateQuestionFromDatabase {
    async findQuestionById(questionId) {
        const hasQuestions = await Question_1.default.findById(questionId).lean();
        return hasQuestions ? true : false;
    }
    async update(questionId, question) {
        const updatedQuestion = await Question_1.default.findByIdAndUpdate(questionId, question, {
            new: true,
            lean: true,
            runValidators: true,
        });
        return updatedQuestion;
    }
}
exports.UpdateQuestionFromDatabase = UpdateQuestionFromDatabase;
