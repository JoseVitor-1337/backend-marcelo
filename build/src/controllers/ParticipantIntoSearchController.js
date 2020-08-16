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
const add_participant_into_search_1 = require("@usecases/search/add-participant-into-search");
class ParticipantController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { participantId, searchId } = request.body;
            try {
                const search = yield add_participant_into_search_1.AddParticipantIntoSearch.update(searchId, participantId);
                return response.json(search);
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message,
                });
            }
        });
    }
}
exports.default = new ParticipantController();
