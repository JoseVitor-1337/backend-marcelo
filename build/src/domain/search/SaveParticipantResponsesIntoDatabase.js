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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveParticipantResponsesIntoDatabase = void 0;
const Search_1 = __importDefault(require("@models/Search"));
class SaveParticipantResponsesIntoDatabase {
    verifyStatusOfParticipant(search, status) {
        return __awaiter(this, void 0, void 0, function* () {
            if (search.retries === status.attempts + 1) {
                status.status = "Completado";
                status.attempts = search.retries;
            }
            else {
                status.status = "Pendente";
                status.attempts++;
            }
            if (search.questions.length < status.answeredQuestions) {
                throw new Error(`${status.answeredQuestions} não é um número válido para perguntas respondidas`);
            }
            if (search.questions.length < status.correctQuestions.length) {
                throw new Error(`${status.correctQuestions.length} não é um número válido para as respostas de suas perguntas`);
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
        });
    }
    updateStatusOfParticipantInSearch(search, searchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedSearch = yield Search_1.default.findByIdAndUpdate(searchId, search, {
                new: true,
                lean: true,
            });
            return updatedSearch;
        });
    }
}
exports.SaveParticipantResponsesIntoDatabase = SaveParticipantResponsesIntoDatabase;
