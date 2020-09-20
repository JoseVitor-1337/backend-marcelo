"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveResearcherToDatabase = void 0;
const Researcher_1 = __importDefault(require("@models/Researcher"));
const Participant_1 = __importDefault(require("@models/Participant"));
class SaveResearcherToDatabase {
    async findByEmailTheParticipant(email) {
        let participant = await Participant_1.default.findOne({ email }).lean();
        return participant ? true : false;
    }
    async findByEmailTheResearcher(email) {
        let researcher = await Researcher_1.default.findOne({ email }).lean();
        return researcher ? true : false;
    }
    async save(researcher) {
        await Researcher_1.default.create(researcher);
    }
}
exports.SaveResearcherToDatabase = SaveResearcherToDatabase;
