"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class CreateParticipantUseCase {
    constructor(createParticipant) {
        this.createParticipant = createParticipant;
    }
    async create(participant) {
        const { email } = participant;
        let participantAlreadyExist = await this.createParticipant.findByEmailTheParticipant(email);
        let researcherAlreadyExist = await this.createParticipant.findByEmailTheResearcher(email);
        if (participantAlreadyExist === true) {
            throw new Error("Este email já está cadastrado na plataforma por um Participante");
        }
        if (researcherAlreadyExist === true) {
            throw new Error("Este email já está cadastrado na plataforma por um Pesquisador");
        }
        participant.password = await bcryptjs_1.default.hash(participant.password, 10);
        await this.createParticipant.save(participant);
    }
}
exports.default = CreateParticipantUseCase;
