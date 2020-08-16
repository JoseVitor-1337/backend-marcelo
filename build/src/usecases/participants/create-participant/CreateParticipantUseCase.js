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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class CreateParticipantUseCase {
    constructor(createParticipant) {
        this.createParticipant = createParticipant;
    }
    create(participant) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email } = participant;
            let participantAlreadyExist = yield this.createParticipant.findByEmailTheParticipant(email);
            let researcherAlreadyExist = yield this.createParticipant.findByEmailTheResearcher(email);
            if (participantAlreadyExist === true) {
                throw new Error("Este email já está cadastrado na plataforma por um Participante");
            }
            if (researcherAlreadyExist === true) {
                throw new Error("Este email já está cadastrado na plataforma por um Pesquisador");
            }
            participant.password = yield bcryptjs_1.default.hash(participant.password, 10);
            yield this.createParticipant.save(participant);
        });
    }
}
exports.default = CreateParticipantUseCase;
