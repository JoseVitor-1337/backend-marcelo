"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddParticipantIntoSearch = void 0;
const AddParticipantIntoSearchUseCase_1 = __importDefault(require("./AddParticipantIntoSearchUseCase"));
const search_1 = require("@domain/search");
const participants_1 = require("@domain/participants");
const AddParticipantIntoSearch = new AddParticipantIntoSearchUseCase_1.default(new search_1.SaveParticipantInSearchIntoDatabase(), new participants_1.GetParticipantFromDatabase());
exports.AddParticipantIntoSearch = AddParticipantIntoSearch;
