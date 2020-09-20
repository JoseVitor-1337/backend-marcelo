"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSearchSessionIntoDatabase = void 0;
const Search_1 = __importDefault(require("@models/Search"));
class UpdateSearchSessionIntoDatabase {
    async open(searchId) {
        await Search_1.default.findByIdAndUpdate(searchId, {
            session: "Aberta",
        }, {
            lean: true,
            runValidators: true,
        });
    }
    async close(searchId) {
        await Search_1.default.findByIdAndUpdate(searchId, {
            session: "Fechada",
        }, {
            lean: true,
            runValidators: true,
        });
    }
}
exports.UpdateSearchSessionIntoDatabase = UpdateSearchSessionIntoDatabase;
