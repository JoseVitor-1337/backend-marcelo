"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question_1 = require("@usecases/question");
class QuestionController {
    async create(request, response) {
        const { search_id } = request.params;
        try {
            await question_1.CreateQuestion.create(search_id, request.body);
            return response.json({ message: "Pergunta criada com sucesso!" });
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
    async update(request, response) {
        const questionId = request.params.id;
        try {
            const updatedQuestion = await question_1.UpdateQuestion.update(questionId, request.body);
            return response.status(200).json(updatedQuestion);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.default = new QuestionController();
