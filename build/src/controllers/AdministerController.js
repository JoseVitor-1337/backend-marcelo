"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const administer_1 = require("@usecases/administer");
class ParticipantController {
    async create(request, response) {
        const { fullName } = request.body;
        try {
            await administer_1.CreateAdminister.create(request.body);
            return response.json({
                message: `Olá ${fullName}, usa conta de administrador foi criada com sucesso!`,
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
            const administer = await administer_1.GetAdminister.findOne(id);
            return response.json(administer);
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.default = new ParticipantController();
