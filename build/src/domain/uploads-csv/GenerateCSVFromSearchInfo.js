"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateCSVFromSearchInfo = void 0;
const format_1 = require("@fast-csv/format");
const path_1 = __importDefault(require("path"));
class GenerateCSVFromSearchInfo {
    async generateTheCSV(payload) {
        format_1.writeToPath(path_1.default.resolve(__dirname, "..", "..", "..", "uploads", `file.csv`), payload);
        const pathToCSVFile = "../../../uploads/file.csv";
        return pathToCSVFile;
    }
    async transformObjectsVectorIntoArray(JSON) {
        return JSON.map((object) => {
            delete object._id;
            delete object.__v;
            return Object.values(object);
        });
    }
    async mergeTwoArrayOfObjects(status, participants) {
        return status.map((statu, index) => {
            delete statu.participantId;
            return Object.assign(participants[index], status[index]);
        });
    }
}
exports.GenerateCSVFromSearchInfo = GenerateCSVFromSearchInfo;
