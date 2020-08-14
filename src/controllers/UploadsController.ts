import { Request, Response } from "express";
import { UploadImage } from "@usecases/uploads-images";

class UploadsController {
  async create(request: Request, response: Response) {
    const filenames = await UploadImage.getPathsFromTheImages(request.files);

    return response.json(filenames);
  }
}

export default new UploadsController();
