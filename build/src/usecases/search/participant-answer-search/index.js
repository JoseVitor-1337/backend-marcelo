"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticipantAnswerSearch = void 0;
const ParticipantAnswerSearchUseCase_1 = __importDefault(require("./ParticipantAnswerSearchUseCase"));
const search_1 = require("@domain/search");
const search_2 = require("@domain/search");
const ParticipantAnswerSearch = new ParticipantAnswerSearchUseCase_1.default(new search_1.SaveParticipantResponsesIntoDatabase(), new search_2.GetSearchFromDatabase());
exports.ParticipantAnswerSearch = ParticipantAnswerSearch;
