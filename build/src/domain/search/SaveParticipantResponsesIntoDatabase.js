"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveParticipantResponsesIntoDatabase = void 0;
const Search_1 = __importDefault(require("@models/Search"));
class SaveParticipantResponsesIntoDatabase {
    async verifyStatusOfParticipant(search, status) {
        if (search.retries === status.attempts + 1) {
            status.status = "Completado";
            status.attempts = search.retries;
        }
        else {
            status.status = "Pendente";
            status.attempts++;
        }
        if (search.questions.length < status.answeredQuestions.length) {
            throw new Error(`${status.answeredQuestions} não é um número válido para perguntas respondidas`);
        }
        search.status = search.status.map((searchStatu) => {
            if (searchStatu.participantId === status.participantId) {
                return status;
            }
            else {
                return searchStatu;
            }
        });
        return search;
    }
    async updateStatusOfParticipantInSearch(search, searchId) {
        const updatedSearch = await Search_1.default.findByIdAndUpdate(searchId, search, {
            new: true,
            lean: true,
        });
        return updatedSearch;
    }
}
exports.SaveParticipantResponsesIntoDatabase = SaveParticipantResponsesIntoDatabase;
