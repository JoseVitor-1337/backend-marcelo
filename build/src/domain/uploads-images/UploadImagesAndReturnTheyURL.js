"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImagesAndReturnTheyURL = void 0;
const enviroment_1 = require("src/config/enviroment");
class UploadImagesAndReturnTheyURL {
    async transformFilanemesIntoArray(files) {
        let filenames = [];
        for (const item in files) {
            filenames[item] = files[item].filename;
        }
        return filenames;
    }
    async getFilenamesAndReturnTheyPaths(filenames) {
        return filenames.map((filename) => {
            return `http://localhost:${enviroment_1.PORT}/uploads/${filename}`;
        });
    }
}
exports.UploadImagesAndReturnTheyURL = UploadImagesAndReturnTheyURL;
