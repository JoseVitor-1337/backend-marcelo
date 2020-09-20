"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_searchs_1 = require("@usecases/search/get-searchs");
class SearchsForAdminsiterController {
    async index(request, response) {
        const { type, title, page, itemPerPage } = request.query;
        const pagination = {
            page: Number(page) || 1,
            itemPerPage: Number(itemPerPage) || 5,
        };
        const filters = {
            type: type,
            title: title,
        };
        try {
            const searchs = await get_searchs_1.GetSearchs.toAdminsiters(filters, pagination);
            return response.json(searchs);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }
}
exports.default = new SearchsForAdminsiterController();
