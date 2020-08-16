"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeSearchSession = void 0;
const ChangeSearchSessionUseCase_1 = __importDefault(require("./ChangeSearchSessionUseCase"));
const search_1 = require("@domain/search");
const ChangeSearchSession = new ChangeSearchSessionUseCase_1.default(new search_1.UpdateSearchSessionIntoDatabase());
exports.ChangeSearchSession = ChangeSearchSession;
