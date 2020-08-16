"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetAllParticipantsUseCase {
    constructor(getAllParticipants) {
        this.getAllParticipants = getAllParticipants;
    }
    async find(filters) {
        const participants = await this.getAllParticipants.findAll(filters);
        return participants;
    }
}
exports.default = GetAllParticipantsUseCase;
