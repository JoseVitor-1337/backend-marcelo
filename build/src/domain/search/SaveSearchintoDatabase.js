"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveSearchintoDatabase = void 0;
const Search_1 = __importDefault(require("@models/Search"));
class SaveSearchintoDatabase {
    async findSearchByFilters(searchFilters) {
        const { title, researcher, content } = searchFilters;
        const hasSearch = await Search_1.default.findOne({
            researcher,
            title,
            content,
        });
        return hasSearch ? true : false;
    }
    async save(search) {
        const newSearch = await Search_1.default.create(search);
        return newSearch;
    }
}
exports.SaveSearchintoDatabase = SaveSearchintoDatabase;
