"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const change_search_session_1 = require("@usecases/search/change-search-session");
class ChangeSearchSessionController {
    async update(request, response) {
        const { search_id } = request.params;
        const { open } = request.body;
        try {
            await change_search_session_1.ChangeSearchSession.update(search_id, open);
            let theReturn = open ? "Sessão aberta" : "Sessão fechada";
            return response.json({ message: theReturn });
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.default = new ChangeSearchSessionController();
