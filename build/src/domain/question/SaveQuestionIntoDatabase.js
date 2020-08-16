"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveQuestionsIntoDatabase = void 0;
const Question_1 = __importDefault(require("@models/Question"));
const Search_1 = __importDefault(require("@models/Search"));
class SaveQuestionsIntoDatabase {
    async questionMustHaveACorrectAnswer(questionId, question) {
        const hasCorrectQuestion = question.alternatives.filter((question) => {
            return question.correct === true;
        });
        if (hasCorrectQuestion.length > 0 === false) {
            await Question_1.default.findByIdAndDelete(questionId);
            return false;
        }
        else {
            return true;
        }
    }
    async save(question) {
        const newQuestion = await Question_1.default.create(question);
        return newQuestion._id;
    }
    async updateSearchToIncresesAQuestion(searchId, search, questionId) {
        await Search_1.default.findByIdAndUpdate(searchId, {
            questions: [...search.questions, questionId],
        }, {
            new: true,
            lean: true,
            runValidators: true,
        });
    }
}
exports.SaveQuestionsIntoDatabase = SaveQuestionsIntoDatabase;
