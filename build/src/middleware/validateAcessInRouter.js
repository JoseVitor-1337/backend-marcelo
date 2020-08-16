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
const validate_acess_in_routes_1 = require("@usecases/validate-acess-in-routes");
function validateAcessInRoutes(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = String(request.headers.token);
        try {
            const decodedToken = yield validate_acess_in_routes_1.ValidadeUserAcess.hasAcessToRoutes(token);
            request.headers.id = decodedToken.id;
            next();
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    });
}
exports.default = validateAcessInRoutes;
