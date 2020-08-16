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
exports.SaveParticipantToDatabase = void 0;
const Participant_1 = __importDefault(require("@models/Participant"));
const Researcher_1 = __importDefault(require("@models/Researcher"));
class SaveParticipantToDatabase {
    findByEmailTheParticipant(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let participant = yield Participant_1.default.findOne({ email }).lean();
            return participant ? true : false;
        });
    }
    findByEmailTheResearcher(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let researcher = yield Researcher_1.default.findOne({ email }).lean();
            return researcher ? true : false;
        });
    }
    save(participant) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Participant_1.default.create(participant);
        });
    }
}
exports.SaveParticipantToDatabase = SaveParticipantToDatabase;
