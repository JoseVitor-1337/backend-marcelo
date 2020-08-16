"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSearchs = void 0;
const GetSearchsUseCase_1 = __importDefault(require("./GetSearchsUseCase"));
const search_1 = require("@domain/search");
const GetSearchs = new GetSearchsUseCase_1.default(new search_1.GetSearchFromDatabase());
exports.GetSearchs = GetSearchs;
