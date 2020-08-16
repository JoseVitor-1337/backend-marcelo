"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const participants_1 = require("@usecases/participants");
const get_all_participants_1 = require("@usecases/participants/get-all-participants");
class ParticipantController {
    async create(request, response) {
        const { fullName } = request.body;
        try {
            let createParticipant = participants_1.CreateParticipant;
            await createParticipant.create(request.body);
            return response.json({
                message: `Participantes ${fullName} foi cadastrado com sucesso`,
            });
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
    async show(request, response) {
        const id = String(request.headers.id);
        try {
            const participant = await participants_1.GetParticipant.findOne(id);
            return response.json(participant);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
    async index(request, response) {
        const filters = request.query;
        try {
            const participants = await get_all_participants_1.GetAllParticipants.find(filters);
            return response.json(participants);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.default = new ParticipantController();
