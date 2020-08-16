"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetSearchsUseCase {
    constructor(getSearchs) {
        this.getSearchs = getSearchs;
    }
    async toParticipants(status, filters, pagination) {
        const searchsForParticipants = await this.getSearchs.findSearchByParticipantView(status, filters, pagination);
        return searchsForParticipants;
    }
    async toAdminsiters(filters, pagination) {
        const searchsForTheAdminister = await this.getSearchs.findAllSearchsForAdminister(filters, pagination);
        return searchsForTheAdminister;
    }
    async toResearchers(researcherId, filters, pagination) {
        const searchsSeachsOfResearcher = await this.getSearchs.findSearchsOfResearcher(researcherId, filters, pagination);
        return searchsSeachsOfResearcher;
    }
}
exports.default = GetSearchsUseCase;
