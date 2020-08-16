"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_acess_in_routes_1 = require("@usecases/validate-acess-in-routes");
async function validateAcessInRoutes(request, response, next) {
    const token = String(request.headers.token);
    try {
        const decodedToken = await validate_acess_in_routes_1.ValidadeUserAcess.hasAcessToRoutes(token);
        request.headers.id = decodedToken.id;
        next();
    }
    catch (error) {
        return response.status(400).json({
            message: error.message,
        });
    }
}
exports.default = validateAcessInRoutes;
