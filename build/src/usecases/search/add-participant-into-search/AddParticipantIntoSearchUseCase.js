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
class AddParticipantIntoSearchUseCase {
    constructor(addParticipantIntoSearch, getParticipant) {
        this.addParticipantIntoSearch = addParticipantIntoSearch;
        this.getParticipant = getParticipant;
    }
    update(searchId, participantId) {
        return __awaiter(this, void 0, void 0, function* () {
            const participantExist = yield this.getParticipant.find(participantId);
            if (!participantExist) {
                throw new Error("Participante não encontrado");
            }
            const updatedSearch = yield this.addParticipantIntoSearch.updateSearchToAddParticipant(searchId, participantId);
            return updatedSearch;
        });
    }
}
exports.default = AddParticipantIntoSearchUseCase;
