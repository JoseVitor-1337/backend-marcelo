"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetResearcherUseCase {
    constructor(getResearcher) {
        this.getResearcher = getResearcher;
    }
    async findOne(id) {
        const researcher = await this.getResearcher.find(id);
        if (!researcher) {
            throw new Error("O usuário não é um Pesquisador");
        }
        return researcher;
    }
}
exports.default = GetResearcherUseCase;
