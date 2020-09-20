"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAdministerFromDatabase = void 0;
const Administer_1 = __importDefault(require("@models/Administer"));
class GetAdministerFromDatabase {
    async find(id) {
        const administer = await Administer_1.default.findById(id).lean();
        return administer;
    }
}
exports.GetAdministerFromDatabase = GetAdministerFromDatabase;
