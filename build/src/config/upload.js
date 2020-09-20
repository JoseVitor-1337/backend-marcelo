"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const storage = multer_1.default.diskStorage({
    destination: path_1.default.resolve(__dirname, "..", "..", "uploads"),
    filename: function (request, file, callback) {
        console.log(request.body.id);
        const extension = path_1.default.extname(file.originalname);
        const name = path_1.default.basename(file.originalname, extension);
        const filename = `${name}-${Date.now()}${extension}`;
        callback(null, filename);
    },
});
const uploads = multer_1.default({ storage });
exports.default = uploads;
