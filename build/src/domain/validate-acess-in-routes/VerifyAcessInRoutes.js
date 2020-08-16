"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyAcessInRoutes = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const enviroment_1 = require("src/config/enviroment");
class VerifyAcessInRoutes {
    hasToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token) {
                throw new Error("Você não tem authorização!");
            }
        });
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
