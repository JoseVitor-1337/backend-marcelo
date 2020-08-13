import { Router } from "express";
import ParticipantController from "@controllers/ParticipantController";
import ResearcherController from "@controllers/ResearcherController";
import AuthenticationController from "@controllers/AuthenticationController";
import validateAcessInRouter from "./middleware/ValidateAcessInRouter";

const routes = Router();

routes.post("/participant", ParticipantController.create);
routes.get("/participant", validateAcessInRouter, ParticipantController.show);

routes.post("/researcher", ResearcherController.create);

routes.post("/auth", AuthenticationController.create);

export default routes;
