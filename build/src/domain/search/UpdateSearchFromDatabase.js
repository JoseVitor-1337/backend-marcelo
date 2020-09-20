"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSearchFromDatabase = void 0;
const Search_1 = __importDefault(require("@models/Search"));
class UpdateSearchFromDatabase {
    async update(searchId, search) {
        const newSearch = await Search_1.default.findByIdAndUpdate(searchId, search, {
            new: true,
            lean: true,
            runValidators: true,
        });
        return newSearch;
    }
}
exports.UpdateSearchFromDatabase = UpdateSearchFromDatabase;
