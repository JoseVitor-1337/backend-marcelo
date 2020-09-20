"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSearch = void 0;
const CreateSearchUseCase_1 = __importDefault(require("./CreateSearchUseCase"));
const search_1 = require("@domain/search");
const researcher_1 = require("@domain/researcher");
const CreateSearch = new CreateSearchUseCase_1.default(new search_1.SaveSearchintoDatabase(), new researcher_1.GetResearcherFromDatabase());
exports.CreateSearch = CreateSearch;
