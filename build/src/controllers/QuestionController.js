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
const question_1 = require("@usecases/question");
class QuestionController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search_id } = request.params;
            try {
                yield question_1.CreateQuestion.create(search_id, request.body);
                return response.json({ message: "Pergunta criada com sucesso!" });
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message,
                });
            }
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const questionId = request.params.id;
            try {
                const updatedQuestion = yield question_1.UpdateQuestion.update(questionId, request.body);
                return response.status(200).json(updatedQuestion);
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message,
                });
            }
        });
    }
}
exports.default = new QuestionController();
