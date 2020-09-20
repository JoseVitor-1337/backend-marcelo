"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllParticipants = void 0;
const GetAllParticipantsUseCase_1 = __importDefault(require("./GetAllParticipantsUseCase"));
const participants_1 = require("@domain/participants");
const GetAllParticipants = new GetAllParticipantsUseCase_1.default(new participants_1.GetAllParticipantsFromDatabase());
exports.GetAllParticipants = GetAllParticipants;
