import { Router } from "express";
import upload from "@config/upload";

import validateAcessInRoutes from "@middleware/validateAcessInRoutes";

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
  validateAcessInRoutes,
  upload.array("images"),
  UploadsController.create
);

routes.post("/participant", ParticipantController.create);
routes.get("/participant", validateAcessInRoutes, ParticipantController.show);
routes.get("/participants", validateAcessInRoutes, ParticipantController.index);

routes.post("/administer", AdministerController.create);
routes.get("/administer", validateAcessInRoutes, AdministerController.show);

routes.post("/researcher", ResearcherController.create);
routes.get("/researcher", validateAcessInRoutes, ResearcherController.show);

routes.post("/search", validateAcessInRoutes, SearchController.create);
routes.patch("/search/:id", validateAcessInRoutes, SearchController.update);
routes.get("/search", validateAcessInRoutes, SearchController.index);

routes.patch("/question/:id", validateAcessInRoutes, QuestionController.update);
routes.post(
  "/question/:search_id",
  validateAcessInRoutes,
  QuestionController.create
);

routes.post("/auth", AuthenticationController.create);

routes.patch(
  "/participant/search",
  validateAcessInRoutes,
  ParticipantIntoSearchController.create
);

routes.patch(
  "/participant/answer/search/:search_id",
  validateAcessInRoutes,
  ParticipantAnswerSearchController.update
);

routes.patch(
  "/search/session/:search_id",
  validateAcessInRoutes,
  ChangeSearchSessionController.update
);

routes.get(
  "/searchs/participant",
  validateAcessInRoutes,
  SearchsForParticipantController.index
);

routes.get(
  "/searchs/administer",
  validateAcessInRoutes,
  SearchsForAdminsiterController.index
);

routes.post(
  "/download/csv/:search_id",
  validateAcessInRoutes,
  GenerateCSVController.create
);

export default routes;
