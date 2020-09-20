"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetParticipantUseCase {
    constructor(getParticipant) {
        this.getParticipant = getParticipant;
    }
    async findOne(id) {
        const participant = await this.getParticipant.find(id);
        if (!participant) {
            throw new Error("O usuário não é um Participante");
        }
        return participant;
    }
}
exports.default = GetParticipantUseCase;
