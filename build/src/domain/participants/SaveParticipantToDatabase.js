"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveParticipantToDatabase = void 0;
const Participant_1 = __importDefault(require("@models/Participant"));
const Researcher_1 = __importDefault(require("@models/Researcher"));
class SaveParticipantToDatabase {
    async findByEmailTheParticipant(email) {
        let participant = await Participant_1.default.findOne({ email }).lean();
        return participant ? true : false;
    }
    async findByEmailTheResearcher(email) {
        let researcher = await Researcher_1.default.findOne({ email }).lean();
        return researcher ? true : false;
    }
    async save(participant) {
        await Participant_1.default.create(participant);
    }
}
exports.SaveParticipantToDatabase = SaveParticipantToDatabase;
