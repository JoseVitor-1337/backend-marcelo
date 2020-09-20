"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetParticipant = void 0;
const participants_1 = require("@domain/participants");
const GetParticipantUseCase_1 = __importDefault(require("./GetParticipantUseCase"));
const GetParticipant = new GetParticipantUseCase_1.default(new participants_1.GetParticipantFromDatabase());
exports.GetParticipant = GetParticipant;
