"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_participant_into_search_1 = require("@usecases/search/add-participant-into-search");
class ParticipantController {
    async create(request, response) {
        const { participantId, searchId } = request.body;
        try {
            const search = await add_participant_into_search_1.AddParticipantIntoSearch.update(searchId, participantId);
            return response.json(search);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.default = new ParticipantController();
