"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UploadImageUseCase {
    constructor(uploadImages) {
        this.uploadImages = uploadImages;
    }
    async getPathsFromTheImages(files) {
        const filenames = await this.uploadImages.transformFilanemesIntoArray(files);
        const pathOfFilenames = await this.uploadImages.getFilenamesAndReturnTheyPaths(filenames);
        return pathOfFilenames;
    }
}
exports.default = UploadImageUseCase;
