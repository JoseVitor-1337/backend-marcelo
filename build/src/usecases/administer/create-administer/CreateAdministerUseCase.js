"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class CreateAdministerUseCase {
    constructor(createAdminister) {
        this.createAdminister = createAdminister;
    }
    async create(administer) {
        const { email } = administer;
        let participantAlreadyExist = await this.createAdminister.findByEmailTheParticipant(email);
        let researcherAlreadyExist = await this.createAdminister.findByEmailTheResearcher(email);
        if (participantAlreadyExist === true) {
            throw new Error("Este email já está cadastrado na plataforma por um Participante");
        }
        if (researcherAlreadyExist === true) {
            throw new Error("Este email já está cadastrado na plataforma por um Pesquisador");
        }
        administer.password = await bcryptjs_1.default.hash(administer.password, 10);
        await this.createAdminister.save(administer);
    }
}
exports.default = CreateAdministerUseCase;
