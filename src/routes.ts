import { Router } from "express";
import ParticipantController from "@controllers/ParticipantController";

const routes = Router();

routes.post("/participant", ParticipantController.create);

export default routes;
