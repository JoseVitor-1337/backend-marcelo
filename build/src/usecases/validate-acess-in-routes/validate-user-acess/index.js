"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidadeUserAcess = void 0;
const ValidateUserAcessUseCase_1 = __importDefault(require("./ValidateUserAcessUseCase"));
const VerifyAcessInRoutes_1 = require("@domain/validate-acess-in-routes/VerifyAcessInRoutes");
let ValidadeUserAcess = new ValidateUserAcessUseCase_1.default(new VerifyAcessInRoutes_1.VerifyAcessInRoutes());
exports.ValidadeUserAcess = ValidadeUserAcess;
