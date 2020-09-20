"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetAdministerUseCase {
    constructor(getAdminister) {
        this.getAdminister = getAdminister;
    }
    async findOne(id) {
        const administer = await this.getAdminister.find(id);
        if (!administer) {
            throw new Error("O usuário não é um Administrador");
        }
        return administer;
    }
}
exports.default = GetAdministerUseCase;
