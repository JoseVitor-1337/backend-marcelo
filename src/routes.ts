import { Router } from "express";
import upload from "@config/upload";

import ParticipantController from "@controllers/ParticipantController";
import ResearcherController from "@controllers/ResearcherController";
import AuthenticationController from "@controllers/AuthenticationController";
import validateAcessInRouter from "./middleware/validateAcessInRouter";
import AdministerController from "@controllers/AdministerController";
import UploadsController from "@controllers/UploadsController";
import SearchController from "@controllers/SearchController";
import QuestionController from "@controllers/QuestionController";

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

routes.post(
  "/question/:search_id",
  validateAcessInRouter,
  QuestionController.create
);
routes.patch("/question/:id", validateAcessInRouter, QuestionController.update);

routes.post("/auth", AuthenticationController.create);

export default routes;
