"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const upload_1 = __importDefault(require("@config/upload"));
const validateAcessInRouter_1 = __importDefault(require("@middleware/validateAcessInRouter"));
const ParticipantController_1 = __importDefault(require("@controllers/ParticipantController"));
const ResearcherController_1 = __importDefault(require("@controllers/ResearcherController"));
const AuthenticationController_1 = __importDefault(require("@controllers/AuthenticationController"));
const AdministerController_1 = __importDefault(require("@controllers/AdministerController"));
const UploadsController_1 = __importDefault(require("@controllers/UploadsController"));
const SearchController_1 = __importDefault(require("@controllers/SearchController"));
const QuestionController_1 = __importDefault(require("@controllers/QuestionController"));
const ParticipantIntoSearchController_1 = __importDefault(require("@controllers/ParticipantIntoSearchController"));
const ParticipantAnswerSearchController_1 = __importDefault(require("@controllers/ParticipantAnswerSearchController"));
const SearchsForAdminsiterController_1 = __importDefault(require("@controllers/SearchsForAdminsiterController"));
const SearchsForParticipantController_1 = __importDefault(require("@controllers/SearchsForParticipantController"));
const ChangeSearchSessionController_1 = __importDefault(require("@controllers/ChangeSearchSessionController"));
const GenerateCSVController_1 = __importDefault(require("@controllers/GenerateCSVController"));
const routes = express_1.Router();
routes.post("/uploads", validateAcessInRouter_1.default, upload_1.default.array("images"), UploadsController_1.default.create);
routes.post("/participant", ParticipantController_1.default.create);
routes.get("/participant", validateAcessInRouter_1.default, ParticipantController_1.default.show);
routes.get("/participants", validateAcessInRouter_1.default, ParticipantController_1.default.index);
routes.post("/administer", AdministerController_1.default.create);
routes.get("/administer", validateAcessInRouter_1.default, AdministerController_1.default.show);
routes.post("/researcher", ResearcherController_1.default.create);
routes.get("/researcher", validateAcessInRouter_1.default, ResearcherController_1.default.show);
routes.post("/search", validateAcessInRouter_1.default, SearchController_1.default.create);
routes.patch("/search/:id", validateAcessInRouter_1.default, SearchController_1.default.update);
routes.get("/search", validateAcessInRouter_1.default, SearchController_1.default.index);
routes.patch("/question/:id", validateAcessInRouter_1.default, QuestionController_1.default.update);
routes.post("/question/:search_id", validateAcessInRouter_1.default, QuestionController_1.default.create);
routes.post("/auth", AuthenticationController_1.default.create);
routes.patch("/participant/search", validateAcessInRouter_1.default, ParticipantIntoSearchController_1.default.create);
routes.patch("/participant/answer/search/:search_id", validateAcessInRouter_1.default, ParticipantAnswerSearchController_1.default.update);
routes.patch("/search/session/:search_id", validateAcessInRouter_1.default, ChangeSearchSessionController_1.default.update);
routes.get("/searchs/participant", validateAcessInRouter_1.default, SearchsForParticipantController_1.default.index);
routes.get("/searchs/administer", validateAcessInRouter_1.default, SearchsForAdminsiterController_1.default.index);
routes.post("/download/csv/:search_id", validateAcessInRouter_1.default, GenerateCSVController_1.default.create);
exports.default = routes;
