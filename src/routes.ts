import { Router } from "express";
import ParticipantController from "@controllers/ParticipantController";
import ResearcherController from "@controllers/ResearcherController";

const routes = Router();

routes.post("/participant", ParticipantController.create);

routes.post("/researcher", ResearcherController.create);

export default routes;
