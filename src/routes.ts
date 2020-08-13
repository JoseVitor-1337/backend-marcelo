import { Router } from "express";
import ParticipantController from "@controllers/ParticipantController";
import ResearcherController from "@controllers/ResearcherController";
import AuthenticationController from "@controllers/AuthenticationController";
import validateAcessInRouter from "./middleware/ValidateAcessInRouter";
import AdministerController from "@controllers/AdministerController";

const routes = Router();

routes.post("/participant", ParticipantController.create);
routes.get("/participant", validateAcessInRouter, ParticipantController.show);

routes.post("/administer", AdministerController.create);
routes.get("/administer", validateAcessInRouter, AdministerController.show);

routes.post("/researcher", ResearcherController.create);

routes.post("/auth", AuthenticationController.create);

export default routes;
