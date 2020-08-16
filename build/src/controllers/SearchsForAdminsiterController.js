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
const get_searchs_1 = require("@usecases/search/get-searchs");
class SearchsForAdminsiterController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
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
                const searchs = yield get_searchs_1.GetSearchs.toAdminsiters(filters, pagination);
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
exports.default = new SearchsForAdminsiterController();
