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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveQuestionsIntoDatabase = void 0;
const Question_1 = __importDefault(require("@models/Question"));
const Search_1 = __importDefault(require("@models/Search"));
class SaveQuestionsIntoDatabase {
    questionMustHaveACorrectAnswer(questionId, question) {
        return __awaiter(this, void 0, void 0, function* () {
            const hasCorrectQuestion = question.alternatives.filter((question) => {
                return question.correct === true;
            });
            if (hasCorrectQuestion.length > 0 === false) {
                yield Question_1.default.findByIdAndDelete(questionId);
                return false;
            }
            else {
                return true;
            }
        });
    }
    save(question) {
        return __awaiter(this, void 0, void 0, function* () {
            const newQuestion = yield Question_1.default.create(question);
            return newQuestion._id;
        });
    }
    updateSearchToIncresesAQuestion(searchId, search, questionId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Search_1.default.findByIdAndUpdate(searchId, {
                questions: [...search.questions, questionId],
            }, {
                new: true,
                lean: true,
                runValidators: true,
            });
        });
    }
}
exports.SaveQuestionsIntoDatabase = SaveQuestionsIntoDatabase;
