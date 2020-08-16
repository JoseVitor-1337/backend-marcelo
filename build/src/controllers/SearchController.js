"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_search_1 = require("@usecases/search/create-search");
const update_search_1 = require("@usecases/search/update-search");
const get_searchs_1 = require("@usecases/search/get-searchs");
class SearchController {
    async create(request, response) {
        const resaercherId = String(request.headers.id);
        request.body.researcher = resaercherId;
        try {
            const search = await create_search_1.CreateSearch.create(request.body);
            return response.json(search);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }
    async update(request, response) {
        const searchId = String(request.params.id);
        const researcherId = String(request.headers.id);
        request.body.researcher = researcherId;
        try {
            const updatedSearch = await update_search_1.UpdateSearch.update(searchId, request.body);
            return response.json(updatedSearch);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }
    async index(request, response) {
        const { type, title, page, itemPerPage } = request.query;
        const { id } = request.headers;
        const pagination = {
            page: Number(page) || 1,
            itemPerPage: Number(itemPerPage) || 5,
        };
        const filters = {
            type: type,
            title: title,
        };
        try {
            const searchs = await get_searchs_1.GetSearchs.toResearchers(id, filters, pagination);
            return response.json(searchs);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }
}
exports.default = new SearchController();
