"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSearch = void 0;
const UpdateSearchUseCase_1 = __importDefault(require("./UpdateSearchUseCase"));
const search_1 = require("@domain/search");
const UpdateSearch = new UpdateSearchUseCase_1.default(new search_1.UpdateSearchFromDatabase());
exports.UpdateSearch = UpdateSearch;
