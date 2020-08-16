"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidateUserAcessUseCase {
    constructor(validateUserAcess) {
        this.validateUserAcess = validateUserAcess;
    }
    async hasAcessToRoutes(token) {
        this.validateUserAcess.hasToken(token);
        let decoded = this.validateUserAcess.decodedToken(token);
        return decoded;
    }
}
exports.default = ValidateUserAcessUseCase;
