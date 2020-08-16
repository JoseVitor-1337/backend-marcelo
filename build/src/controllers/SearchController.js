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
const create_search_1 = require("@usecases/search/create-search");
const update_search_1 = require("@usecases/search/update-search");
const get_searchs_1 = require("@usecases/search/get-searchs");
class SearchController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const resaercherId = String(request.headers.id);
            request.body.researcher = resaercherId;
            try {
                const search = yield create_search_1.CreateSearch.create(request.body);
                return response.json(search);
            }
            catch (err) {
                return response.status(400).json({
                    message: err.message,
                });
            }
        });
    }
    update(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchId = String(request.params.id);
            const researcherId = String(request.headers.id);
            request.body.researcher = researcherId;
            try {
                const updatedSearch = yield update_search_1.UpdateSearch.update(searchId, request.body);
                return response.json(updatedSearch);
            }
            catch (err) {
                return response.status(400).json({
                    message: err.message,
                });
            }
        });
    }
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const searchs = yield get_searchs_1.GetSearchs.toResearchers(id, filters, pagination);
                return response.json(searchs);
            }
            catch (err) {
                return response.status(400).json({
                    message: err.message,
                });
            }
        });
    }
}
exports.default = new SearchController();
