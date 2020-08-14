import { Request, Response } from "express";
import { CreateSearch } from "@usecases/search/create-search";

class SearchController {
  async create(request: Request, response: Response) {
    const resaercherId = String(request.headers.id);
    request.body.researcher = resaercherId;

    try {
      const search = await CreateSearch.create(request.body);

      return response.json(search);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    try {
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export default new SearchController();
