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
Object.defineProperty(exports, "__esModule", { value: true });
class MakeAuthenticationUseCase {
    constructor(authentication) {
        this.authentication = authentication;
    }
    makeAuthentication(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let user = yield this.authentication.findUserTypeByEmail(email);
            let hasMatch = yield this.authentication.hasMatchThePassword(user.password, password);
            if (!hasMatch) {
                throw new Error("Email e/ou senha inválidos");
            }
            const token = yield this.authentication.generateAcessToken(user);
            return token;
        });
    }
}
exports.default = MakeAuthenticationUseCase;
