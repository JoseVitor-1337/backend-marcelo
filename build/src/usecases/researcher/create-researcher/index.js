"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateResearcher = void 0;
const CreateResearcherUseCase_1 = __importDefault(require("./CreateResearcherUseCase"));
const researcher_1 = require("@domain/researcher");
const CreateResearcher = new CreateResearcherUseCase_1.default(new researcher_1.SaveResearcherToDatabase());
exports.CreateResearcher = CreateResearcher;
