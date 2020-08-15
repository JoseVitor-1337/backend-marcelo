import { Request, Response } from "express";
import { GetSearchs } from "@usecases/search/get-searchs";

class SearchsForAdminsiterController {
  async index(request: Request, response: Response) {
    const { type, title, page, itemPerPage } = request.query;

    const pagination = {
      page: Number(page) || 1,
      itemPerPage: Number(itemPerPage) || 5,
    };

    const filters = {
      type: type as string,
      title: title as string,
    };

    try {
      const searchs = await GetSearchs.toAdminsiters(filters, pagination);

      return response.json(searchs);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export default new SearchsForAdminsiterController();
