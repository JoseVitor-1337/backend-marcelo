import { Request, Response } from "express";
import { GetSearchs } from "@usecases/search";

class SearchsForParticipantController {
  async index(request: Request, response: Response) {
    const { status, type, title, page, itemPerPage } = request.query;
    const { id } = request.headers;

    const pagination = {
      page: Number(page) || 1,
      itemPerPage: Number(itemPerPage) || 5,
    };

    const filters = {
      type: type as string,
      title: title as string,
    };

    const participantStatus = {
      status: status as string,
      participantId: id as string,
    };
    try {
      const searchs = await GetSearchs.toParticipants(
        participantStatus,
        filters,
        pagination
      );

      return response.json(searchs);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export default new SearchsForParticipantController();
