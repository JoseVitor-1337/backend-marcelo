"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const participant_answer_search_1 = require("@usecases/search/participant-answer-search");
class ParticipantAnswerSearchController {
    async update(request, response) {
        const { search_id } = request.params;
        const status = request.body;
        try {
            const updatedSearch = await participant_answer_search_1.ParticipantAnswerSearch.update(search_id, status);
            return response.json(updatedSearch);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.default = new ParticipantAnswerSearchController();
