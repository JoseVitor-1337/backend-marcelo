"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_searchs_1 = require("@usecases/search/get-searchs");
class SearchsForParticipantController {
    async index(request, response) {
        const { status, type, title, page, itemPerPage } = request.query;
        const { id } = request.headers;
        const pagination = {
            page: Number(page) || 1,
            itemPerPage: Number(itemPerPage) || 5,
        };
        const filters = {
            type: type,
            title: title,
        };
        const participantStatus = {
            status: status,
            participantId: id,
        };
        try {
            const searchs = await get_searchs_1.GetSearchs.toParticipants(participantStatus, filters, pagination);
            return response.json(searchs);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }
}
exports.default = new SearchsForParticipantController();
