"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetResearcher = void 0;
const GetResearcherUseCase_1 = __importDefault(require("./GetResearcherUseCase"));
const researcher_1 = require("@domain/researcher");
const GetResearcher = new GetResearcherUseCase_1.default(new researcher_1.GetResearcherFromDatabase());
exports.GetResearcher = GetResearcher;
