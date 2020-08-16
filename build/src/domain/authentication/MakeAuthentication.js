"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeAuthentication = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Researcher_1 = __importDefault(require("@models/Researcher"));
const Participant_1 = __importDefault(require("@models/Participant"));
const enviroment_1 = require("src/config/enviroment");
const Administer_1 = __importDefault(require("@models/Administer"));
class MakeAuthentication {
    async findParticipantByEmail(email) {
        let participant = await Participant_1.default.findOne({ email })
            .select("password")
            .lean();
        if (participant) {
            return {
                id: participant._id,
                password: participant.password,
            };
        }
    }
    async findResearcherByEmail(email) {
        let researcher = await Researcher_1.default.findOne({ email })
            .select("password")
            .lean();
        if (researcher) {
            return {
                id: researcher._id,
                password: researcher.password,
            };
        }
    }
    async findAdministerByEmail(email) {
        let administer = await Administer_1.default.findOne({ email })
            .select("password")
            .lean();
        if (administer) {
            return {
                id: administer._id,
                password: administer.password,
            };
        }
    }
    async findUserTypeByEmail(email) {
        let participant = await this.findParticipantByEmail(email);
        if (participant) {
            return participant;
        }
        let researcher = await this.findResearcherByEmail(email);
        if (researcher) {
            return researcher;
        }
        let administer = await this.findAdministerByEmail(email);
        if (administer) {
            return administer;
        }
        else {
            throw new Error("Email e/ou senha inválidos.");
        }
    }
    async hasMatchThePassword(userPassword, password) {
        return await bcryptjs_1.default.compare(password, userPassword);
    }
    async generateAcessToken({ id }) {
        const payload = {
            id,
        };
        const token = jsonwebtoken_1.default.sign(payload, enviroment_1.API_SECRET, {
            expiresIn: 100 * 60,
        });
        return token;
    }
}
exports.MakeAuthentication = MakeAuthentication;
