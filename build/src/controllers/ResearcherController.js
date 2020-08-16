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
const researcher_1 = require("@usecases/researcher");
const get_researcher_1 = require("@usecases/researcher/get-researcher");
class ResearcherController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { fullName } = request.body;
            try {
                let createResearcher = researcher_1.CreateResearcher;
                yield createResearcher.create(request.body);
                return response.json({
                    message: `O Pesquisador ${fullName} foi cadastrado com sucesso`,
                });
            }
            catch (err) {
                return response.status(400).json({
                    message: err.message,
                });
            }
        });
    }
    show(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = String(request.headers.id);
            try {
                const researcher = yield get_researcher_1.GetResearcher.findOne(id);
                return response.json(researcher);
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message,
                });
            }
        });
    }
}
exports.default = new ResearcherController();
