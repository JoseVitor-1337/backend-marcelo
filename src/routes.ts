import { Router } from "express";
import ParticipantController from "@controllers/ParticipantController";
import ResearcherController from "@controllers/ResearcherController";
import AuthenticationController from "@controllers/AuthenticationController";

const routes = Router();

routes.post("/participant", ParticipantController.create);

routes.post("/researcher", ResearcherController.create);

routes.post("/auth", AuthenticationController.create);

export default routes;
