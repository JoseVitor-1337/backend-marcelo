"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllParticipantsFromDatabase = void 0;
const Participant_1 = __importDefault(require("@models/Participant"));
class GetAllParticipantsFromDatabase {
    async findAll(filters) {
        const { name, univercityOrSchoolName, schooling } = filters;
        const participants = await Participant_1.default.find({
            $and: [
                {
                    fullName: {
                        $regex: name ? name.toLowerCase() : "",
                    },
                },
                {
                    univercityOrSchoolName: {
                        $regex: univercityOrSchoolName
                            ? univercityOrSchoolName.toLowerCase()
                            : "",
                    },
                },
                {
                    schooling: {
                        $regex: schooling ? schooling : "",
                    },
                },
            ],
        });
        return participants;
    }
}
exports.GetAllParticipantsFromDatabase = GetAllParticipantsFromDatabase;
