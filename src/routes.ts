import { Router } from "express";
import upload from "@config/upload";

import validateAcessInRouter from "./middleware/validateAcessInRouter";

import ParticipantController from "@controllers/ParticipantController";
import ResearcherController from "@controllers/ResearcherController";
import AuthenticationController from "@controllers/AuthenticationController";
import AdministerController from "@controllers/AdministerController";
import UploadsController from "@controllers/UploadsController";
import SearchController from "@controllers/SearchController";
import QuestionController from "@controllers/QuestionController";
import ParticipantIntoSearchController from "@controllers/ParticipantIntoSearchController";
import ParticipantAnswerSearchController from "@controllers/ParticipantAnswerSearchController";
import SearchsForAdminsiterController from "@controllers/SearchsForAdminsiterController";
import SearchsForParticipantController from "@controllers/SearchsForParticipantController";
import ChangeSearchSessionController from "@controllers/ChangeSearchSessionController";
import GenerateCSVController from "@controllers/GenerateCSVController";

const routes = Router();

routes.post(
  "/uploads",
  validateAcessInRouter,
  upload.array("images"),
  UploadsController.create
);

routes.post("/participant", ParticipantController.create);
routes.get("/participant", validateAcessInRouter, ParticipantController.show);
routes.get("/participants", validateAcessInRouter, ParticipantController.index);

routes.post("/administer", AdministerController.create);
routes.get("/administer", validateAcessInRouter, AdministerController.show);

routes.post("/researcher", ResearcherController.create);
routes.get("/researcher", validateAcessInRouter, ResearcherController.show);

routes.post("/search", validateAcessInRouter, SearchController.create);
routes.patch("/search/:id", validateAcessInRouter, SearchController.update);
routes.get("/search", validateAcessInRouter, SearchController.index);

routes.patch("/question/:id", validateAcessInRouter, QuestionController.update);
routes.post(
  "/question/:search_id",
  validateAcessInRouter,
  QuestionController.create
);

routes.post("/auth", AuthenticationController.create);

routes.patch(
  "/participant/search",
  validateAcessInRouter,
  ParticipantIntoSearchController.create
);

routes.patch(
  "/participant/answer/search/:search_id",
  validateAcessInRouter,
  ParticipantAnswerSearchController.update
);

routes.patch(
  "/search/session/:search_id",
  validateAcessInRouter,
  ChangeSearchSessionController.update
);

routes.get(
  "/searchs/participant",
  validateAcessInRouter,
  SearchsForParticipantController.index
);

routes.get(
  "/searchs/administer",
  validateAcessInRouter,
  SearchsForAdminsiterController.index
);

routes.post(
  "/download/csv/:search_id",
  validateAcessInRouter,
  GenerateCSVController.create
);

export default routes;
