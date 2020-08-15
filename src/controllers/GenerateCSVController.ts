import { Request, Response } from "express";
import { UploadCSV } from "@usecases/uploads-csv";

class GenerateCSVController {
  async create(request: Request, response: Response) {
    const { search_id } = request.params;
    try {
      const pathToCSVFile = await UploadCSV.generateCSV(search_id);

      response.download(pathToCSVFile);

      return response.json({ message: "Alo Você" });
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new GenerateCSVController();
