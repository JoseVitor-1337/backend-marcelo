"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadImage = void 0;
const UploadImageUseCase_1 = __importDefault(require("./upload-image/UploadImageUseCase"));
const UploadImagesAndReturnTheyURL_1 = require("@domain/uploads-images/UploadImagesAndReturnTheyURL");
const UploadImage = new UploadImageUseCase_1.default(new UploadImagesAndReturnTheyURL_1.UploadImagesAndReturnTheyURL());
exports.UploadImage = UploadImage;
