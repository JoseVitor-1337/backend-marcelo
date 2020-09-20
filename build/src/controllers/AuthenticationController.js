"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentication_1 = require("@usecases/authentication");
class ParticipantController {
    async create(request, response) {
        const { email, password } = request.body;
        try {
            const authentication = authentication_1.Authentication;
            let token = await authentication.makeAuthentication(email, password);
            return response.json({ token });
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.default = new ParticipantController();
