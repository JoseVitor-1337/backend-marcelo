"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MakeAuthenticationUseCase {
    constructor(authentication) {
        this.authentication = authentication;
    }
    async makeAuthentication(email, password) {
        let user = await this.authentication.findUserTypeByEmail(email);
        let hasMatch = await this.authentication.hasMatchThePassword(user.password, password);
        if (!hasMatch) {
            throw new Error("Email e/ou senha inválidos");
        }
        const token = await this.authentication.generateAcessToken(user);
        return token;
    }
}
exports.default = MakeAuthenticationUseCase;
