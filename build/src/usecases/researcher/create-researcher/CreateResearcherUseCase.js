"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class CreateParticipantUseCase {
    constructor(createResearcher) {
        this.createResearcher = createResearcher;
    }
    async create(researcher) {
        const { email } = researcher;
        let participantAlreadyExist = await this.createResearcher.findByEmailTheParticipant(email);
        let researcherAlreadyExist = await this.createResearcher.findByEmailTheResearcher(email);
        if (participantAlreadyExist === true) {
            throw new Error("Este email já está cadastrado na plataforma por uma Participante");
        }
        if (researcherAlreadyExist === true) {
            throw new Error("Este email já está cadastrado na plataforma por um Pesquisador");
        }
        researcher.password = await bcryptjs_1.default.hash(researcher.password, 10);
        await this.createResearcher.save(researcher);
    }
}
exports.default = CreateParticipantUseCase;
