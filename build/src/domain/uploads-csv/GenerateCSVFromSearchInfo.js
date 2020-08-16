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
exports.GenerateCSVFromSearchInfo = void 0;
const format_1 = require("@fast-csv/format");
const path_1 = __importDefault(require("path"));
class GenerateCSVFromSearchInfo {
    generateTheCSV(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            format_1.writeToPath(path_1.default.resolve(__dirname, "..", "..", "..", "uploads", "csv", `file.csv`), payload);
            const pathToCSVFile = "../../../uploads/csv/file.csv";
            return pathToCSVFile;
        });
    }
    transformObjectsVectorIntoArray(JSON) {
        return __awaiter(this, void 0, void 0, function* () {
            return JSON.map((object) => {
                delete object._id;
                delete object.__v;
                return Object.values(object);
            });
        });
    }
    mergeTwoArrayOfObjects(status, participants) {
        return __awaiter(this, void 0, void 0, function* () {
            return status.map((statu, index) => {
                delete statu.participantId;
                return Object.assign(participants[index], status[index]);
            });
        });
    }
}
exports.GenerateCSVFromSearchInfo = GenerateCSVFromSearchInfo;
