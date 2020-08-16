"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateSearchUseCase {
    constructor(createSearch, findResearch) {
        this.createSearch = createSearch;
        this.findResearch = findResearch;
    }
    async create(search) {
        const { title, researcher, content } = search;
        const userIsAResearch = await this.findResearch.find(search.researcher);
        if (!userIsAResearch) {
            throw new Error("Apenas um Pesquisador pode criar uma pesquisa");
        }
        const searchAlreadyExist = await this.createSearch.findSearchByFilters({
            researcher,
            title,
            content,
        });
        if (searchAlreadyExist) {
            throw new Error("Você já esta pesquisa");
        }
        const newSearch = await this.createSearch.save(search);
        return newSearch;
    }
}
exports.default = CreateSearchUseCase;
