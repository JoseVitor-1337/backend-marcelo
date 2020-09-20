"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadCSV = void 0;
const UploadCSVUseCase_1 = __importDefault(require("./UploadCSVUseCase"));
const GenerateCSVFromSearchInfo_1 = require("@domain/uploads-csv/GenerateCSVFromSearchInfo");
const search_1 = require("@domain/search");
const UploadCSV = new UploadCSVUseCase_1.default(new GenerateCSVFromSearchInfo_1.GenerateCSVFromSearchInfo(), new search_1.GetSearchFromDatabase());
exports.UploadCSV = UploadCSV;
