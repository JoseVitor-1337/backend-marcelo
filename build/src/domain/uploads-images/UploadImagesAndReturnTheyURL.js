"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImagesAndReturnTheyURL = void 0;
const enviroment_1 = require("src/config/enviroment");
class UploadImagesAndReturnTheyURL {
    transformFilanemesIntoArray(files) {
        return __awaiter(this, void 0, void 0, function* () {
            let filenames = [];
            for (const item in files) {
                filenames[item] = files[item].filename;
            }
            return filenames;
        });
    }
    getFilenamesAndReturnTheyPaths(filenames) {
        return __awaiter(this, void 0, void 0, function* () {
            return filenames.map((filename) => {
                return `http://localhost:${enviroment_1.PORT}/uploads/${filename}`;
            });
        });
    }
}
exports.UploadImagesAndReturnTheyURL = UploadImagesAndReturnTheyURL;
