import { Router } from "express";
import { storage } from "./config/upload";
import multer from "multer";

import ParticipantController from "@controllers/ParticipantController";
import ResearcherController from "@controllers/ResearcherController";
import AuthenticationController from "@controllers/AuthenticationController";
import validateAcessInRouter from "./middleware/ValidateAcessInRouter";
import AdministerController from "@controllers/AdministerController";
import UploadsController from "@controllers/UploadsController";

const routes = Router();

const uploadConfig = multer({
  storage,
});

routes.post(
  "/uploads",
  validateAcessInRouter,
  uploadConfig.array("images"),
  UploadsController.create
);

routes.post("/participant", ParticipantController.create);
routes.get("/participant", validateAcessInRouter, ParticipantController.show);
routes.get("/participants", validateAcessInRouter, ParticipantController.index);

routes.post("/administer", AdministerController.create);
routes.get("/administer", validateAcessInRouter, AdministerController.show);

routes.post("/researcher", ResearcherController.create);
routes.get("/researcher", validateAcessInRouter, ResearcherController.show);

routes.post("/auth", AuthenticationController.create);

export default routes;
