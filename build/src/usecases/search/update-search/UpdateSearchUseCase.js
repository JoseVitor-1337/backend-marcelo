"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UpdateSearchUseCase {
    constructor(updateSearch) {
        this.updateSearch = updateSearch;
    }
    async update(searchId, search) {
        const editSearch = await this.updateSearch.update(searchId, search);
        return editSearch;
    }
}
exports.default = UpdateSearchUseCase;
