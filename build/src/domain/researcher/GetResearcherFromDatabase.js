"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResearcherFromDatabase = void 0;
const Researcher_1 = __importDefault(require("@models/Researcher"));
class GetResearcherFromDatabase {
    async find(id) {
        const researcher = await Researcher_1.default.findById(id).lean();
        return researcher;
    }
}
exports.GetResearcherFromDatabase = GetResearcherFromDatabase;
