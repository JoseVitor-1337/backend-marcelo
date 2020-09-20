"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetParticipantFromDatabase = void 0;
const Participant_1 = __importDefault(require("@models/Participant"));
class GetParticipantFromDatabase {
    async find(id) {
        const participant = await Participant_1.default.findById(id).lean();
        return participant;
    }
}
exports.GetParticipantFromDatabase = GetParticipantFromDatabase;
