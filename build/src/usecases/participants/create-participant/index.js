"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateParticipant = void 0;
const CreateParticipantUseCase_1 = __importDefault(require("./CreateParticipantUseCase"));
const participants_1 = require("@domain/participants");
const CreateParticipant = new CreateParticipantUseCase_1.default(new participants_1.SaveParticipantToDatabase());
exports.CreateParticipant = CreateParticipant;
