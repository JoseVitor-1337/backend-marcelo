"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uploads_images_1 = require("@usecases/uploads-images");
class UploadsController {
    async create(request, response) {
        const filenames = await uploads_images_1.UploadImage.getPathsFromTheImages(request.files);
        return response.json(filenames);
    }
}
exports.default = new UploadsController();
