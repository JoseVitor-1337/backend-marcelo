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
exports.MakeAuthentication = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Researcher_1 = __importDefault(require("@models/Researcher"));
const Participant_1 = __importDefault(require("@models/Participant"));
const enviroment_1 = require("src/config/enviroment");
const Administer_1 = __importDefault(require("@models/Administer"));
class MakeAuthentication {
    findParticipantByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let participant = yield Participant_1.default.findOne({ email })
                .select("password")
                .lean();
            if (participant) {
                return {
                    id: participant._id,
                    password: participant.password,
                };
            }
        });
    }
    findResearcherByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let researcher = yield Researcher_1.default.findOne({ email })
                .select("password")
                .lean();
            if (researcher) {
                return {
                    id: researcher._id,
                    password: researcher.password,
                };
            }
        });
    }
    findAdministerByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let administer = yield Administer_1.default.findOne({ email })
                .select("password")
                .lean();
            if (administer) {
                return {
                    id: administer._id,
                    password: administer.password,
                };
            }
        });
    }
    findUserTypeByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            let participant = yield this.findParticipantByEmail(email);
            if (participant) {
                return participant;
            }
            let researcher = yield this.findResearcherByEmail(email);
            if (researcher) {
                return researcher;
            }
            let administer = yield this.findAdministerByEmail(email);
            if (administer) {
                return administer;
            }
            else {
                throw new Error("Email e/ou senha inválidos.");
            }
        });
    }
    hasMatchThePassword(userPassword, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcryptjs_1.default.compare(password, userPassword);
        });
    }
    generateAcessToken({ id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const payload = {
                id,
            };
            const token = jsonwebtoken_1.default.sign(payload, enviroment_1.API_SECRET, {
                expiresIn: 100 * 60,
            });
            return token;
        });
    }
}
exports.MakeAuthentication = MakeAuthentication;
