"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyAcessInRoutes = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const enviroment_1 = require("src/config/enviroment");
class VerifyAcessInRoutes {
    async hasToken(token) {
        if (!token) {
            throw new Error("Você não tem authorização!");
        }
    }
    decodedToken(token) {
        let decodedToken = jsonwebtoken_1.default.verify(token, enviroment_1.API_SECRET);
        if (!decodedToken) {
            throw new Error("Erro no sistema, tente novamente");
        }
        return decodedToken;
    }
}
exports.VerifyAcessInRoutes = VerifyAcessInRoutes;
