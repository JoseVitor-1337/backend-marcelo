"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uploads_csv_1 = require("@usecases/uploads-csv");
class GenerateCSVController {
    async create(request, response) {
        const { search_id } = request.params;
        try {
            const pathToCSVFile = await uploads_csv_1.UploadCSV.generateCSV(search_id);
            response.download(pathToCSVFile);
            return response.json({ message: "Alo Você" });
        }
        catch (error) {
            return response.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.default = new GenerateCSVController();
