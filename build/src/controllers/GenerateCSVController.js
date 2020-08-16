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
const uploads_csv_1 = require("@usecases/uploads-csv");
class GenerateCSVController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const { search_id } = request.params;
            try {
                const pathToCSVFile = yield uploads_csv_1.UploadCSV.generateCSV(search_id);
                response.download(pathToCSVFile);
                return response.json({ message: "Alo Você" });
            }
            catch (error) {
                return response.status(400).json({
                    message: error.message,
                });
            }
        });
    }
}
exports.default = new GenerateCSVController();
