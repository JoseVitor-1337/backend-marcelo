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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSearchFromDatabase = void 0;
const Search_1 = __importDefault(require("@models/Search"));
class GetSearchFromDatabase {
    findSearchByParticipantView(participantStatus, filters, pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, title } = filters;
            const { page, itemPerPage } = pagination;
            const searchs = yield Search_1.default.find({
                participants: {
                    $in: [participantStatus.participantId],
                },
                session: "Aberta",
                $and: [
                    {
                        type: {
                            $regex: type ? type : "",
                        },
                    },
                    {
                        title: {
                            $regex: title ? title : "",
                        },
                    },
                ],
            })
                .skip((page - 1) * itemPerPage)
                .limit(itemPerPage)
                .select("-participants")
                .populate("questions");
            const sequelizedSearchs = searchs.filter((search) => {
                return search.status.some((statu) => {
                    return statu.status === participantStatus.status;
                });
            });
            return sequelizedSearchs;
        });
    }
    findAllSearchsForAdminister(filters, pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, title } = filters;
            const { page, itemPerPage } = pagination;
            const searchs = yield Search_1.default.find({
                $and: [
                    {
                        type: {
                            $regex: type ? type : "",
                        },
                    },
                    {
                        title: {
                            $regex: title ? title : "",
                        },
                    },
                ],
            })
                .skip((page - 1) * itemPerPage)
                .limit(itemPerPage)
                .populate("participants")
                .populate("questions");
            return searchs;
        });
    }
    findSearchsOfResearcher(researchId, filters, pagination) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, title } = filters;
            const { page, itemPerPage } = pagination;
            const searchs = yield Search_1.default.find({
                researcher: researchId,
                $and: [
                    {
                        type: {
                            $regex: type ? type : "",
                        },
                    },
                    {
                        title: {
                            $regex: title ? title : "",
                        },
                    },
                ],
            })
                .skip((page - 1) * itemPerPage)
                .limit(itemPerPage)
                .populate("participants")
                .populate("questions");
            return searchs;
        });
    }
    findSearchByid(searchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield Search_1.default.findById(searchId).lean();
            return search;
        });
    }
    findSearchToMakeCSVFile(searchId) {
        return __awaiter(this, void 0, void 0, function* () {
            const search = yield Search_1.default.findById(searchId)
                .lean()
                .populate("researcher")
                .populate("questions")
                .populate("participants");
            return search;
        });
    }
}
exports.GetSearchFromDatabase = GetSearchFromDatabase;
