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
const participants_1 = require("@usecases/participants");
const get_all_participants_1 = require("@usecases/participants/get-all-participants");
class ParticipantController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullName } = request.body;
            try {
                let createParticipant = participants_1.CreateParticipant;
                yield createParticipant.create(request.body);
                return response.json({
                    message: `Participantes ${fullName} foi cadastrado com sucesso`,
                });
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message,
                });
            }
        });
    }
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = String(request.headers.id);
            try {
                const participant = yield participants_1.GetParticipant.findOne(id);
                return response.json(participant);
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message,
                });
            }
        });
    }
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const filters = request.query;
            try {
                const participants = yield get_all_participants_1.GetAllParticipants.find(filters);
                return response.json(participants);
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message,
                });
            }
        });
    }
}
exports.default = new ParticipantController();
