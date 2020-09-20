"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSearchFromDatabase = void 0;
const Search_1 = __importDefault(require("@models/Search"));
class GetSearchFromDatabase {
    async findSearchByParticipantView(participantStatus, filters, pagination) {
        const { type, title } = filters;
        const { page, itemPerPage } = pagination;
        const searchs = await Search_1.default.find({
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
    }
    async findAllSearchsForAdminister(filters, pagination) {
        const { type, title } = filters;
        const { page, itemPerPage } = pagination;
        const searchs = await Search_1.default.find({
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
    }
    async findSearchsOfResearcher(researchId, filters, pagination) {
        const { type, title } = filters;
        const { page, itemPerPage } = pagination;
        const searchs = await Search_1.default.find({
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
    }
    async findSearchByid(searchId) {
        const search = await Search_1.default.findById(searchId).lean();
        return search;
    }
    async findSearchToMakeCSVFile(searchId) {
        const search = await Search_1.default.findById(searchId)
            .lean()
            .populate("researcher")
            .populate("questions")
            .populate("participants");
        return search;
    }
}
exports.GetSearchFromDatabase = GetSearchFromDatabase;
