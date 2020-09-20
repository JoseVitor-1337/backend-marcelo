"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParticipantAnswerSearchUseCase {
    constructor(addParticipantResponses, getSearch) {
        this.addParticipantResponses = addParticipantResponses;
        this.getSearch = getSearch;
    }
    async update(searchId, status) {
        const search = await this.getSearch.findSearchByid(searchId);
        if (!searchId) {
            throw new Error("Pesquisa não encontrada");
        }
        const verifiedStatus = await this.addParticipantResponses.verifyStatusOfParticipant(search, status);
        const updatedSearch = await this.addParticipantResponses.updateStatusOfParticipantInSearch(verifiedStatus, searchId);
        return updatedSearch;
    }
}
exports.default = ParticipantAnswerSearchUseCase;
