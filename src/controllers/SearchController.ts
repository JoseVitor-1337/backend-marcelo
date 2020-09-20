import { Request, Response } from "express";
import { CreateSearch, UpdateSearch, GetSearchs } from "@usecases/search";

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
    const searchId = String(request.params.id);
    const researcherId = String(request.headers.id);

    request.body.researcher = researcherId;

    try {
      const updatedSearch = await UpdateSearch.update(searchId, request.body);

      return response.json(updatedSearch);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }

  async index(request: Request, response: Response) {
    const { type, title, page, itemPerPage } = request.query;
    const { id } = request.headers;

    const pagination = {
      page: Number(page) || 1,
      itemPerPage: Number(itemPerPage) || 5,
    };

    const filters = {
      type: type as string,
      title: title as string,
    };

    try {
      const searchs = await GetSearchs.toResearchers(id, filters, pagination);

      return response.json(searchs);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export default new SearchController();
