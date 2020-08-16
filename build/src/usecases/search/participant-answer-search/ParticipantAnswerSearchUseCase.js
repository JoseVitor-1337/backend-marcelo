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
class ParticipantAnswerSearchUseCase {
    constructor(addParticipantResponses, getSearch) {
        this.addParticipantResponses = addParticipantResponses;
        this.getSearch = getSearch;
    }
    update(searchId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield this.getSearch.findSearchByid(searchId);
            if (!searchId) {
                throw new Error("Pesquisa não encontrada");
            }
            const verifiedStatus = yield this.addParticipantResponses.verifyStatusOfParticipant(search, status);
            const updatedSearch = yield this.addParticipantResponses.updateStatusOfParticipantInSearch(verifiedStatus, searchId);
            return updatedSearch;
        });
    }
}
exports.default = ParticipantAnswerSearchUseCase;
