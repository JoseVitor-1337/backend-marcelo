"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddParticipantIntoSearchUseCase {
    constructor(addParticipantIntoSearch, getParticipant) {
        this.addParticipantIntoSearch = addParticipantIntoSearch;
        this.getParticipant = getParticipant;
    }
    async update(searchId, participantId) {
        const participantExist = await this.getParticipant.find(participantId);
        if (!participantExist) {
            throw new Error("Participante não encontrado");
        }
        const updatedSearch = await this.addParticipantIntoSearch.updateSearchToAddParticipant(searchId, participantId);
        return updatedSearch;
    }
}
exports.default = AddParticipantIntoSearchUseCase;
