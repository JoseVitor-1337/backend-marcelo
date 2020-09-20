"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authentication = void 0;
const MakeAuthenticationUseCase_1 = __importDefault(require("./MakeAuthenticationUseCase"));
const authentication_1 = require("@domain/authentication");
const Authentication = new MakeAuthenticationUseCase_1.default(new authentication_1.MakeAuthentication());
exports.Authentication = Authentication;
