"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const researcher_1 = require("@usecases/researcher");
const get_researcher_1 = require("@usecases/researcher/get-researcher");
class ResearcherController {
    async create(request, response) {
        const { fullName } = request.body;
        try {
            let createResearcher = researcher_1.CreateResearcher;
            await createResearcher.create(request.body);
            return response.json({
                message: `O Pesquisador ${fullName} foi cadastrado com sucesso`,
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }
    async show(request, response) {
        const id = String(request.headers.id);
        try {
            const researcher = await get_researcher_1.GetResearcher.findOne(id);
            return response.json(researcher);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.default = new ResearcherController();
