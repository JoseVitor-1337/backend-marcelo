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
class CreateSearchUseCase {
    constructor(createSearch, findResearch) {
        this.createSearch = createSearch;
        this.findResearch = findResearch;
    }
    create(search) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, researcher, content } = search;
            const userIsAResearch = yield this.findResearch.find(search.researcher);
            if (!userIsAResearch) {
                throw new Error("Apenas um Pesquisador pode criar uma pesquisa");
            }
            const searchAlreadyExist = yield this.createSearch.findSearchByFilters({
                researcher,
                title,
                content,
            });
            if (searchAlreadyExist) {
                throw new Error("Você já esta pesquisa");
            }
            const newSearch = yield this.createSearch.save(search);
            return newSearch;
        });
    }
}
exports.default = CreateSearchUseCase;
