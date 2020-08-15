import { Request, Response } from "express";
import { ParticipantAnswerSearch } from "@usecases/search/participant-answer-search";

class ParticipantAnswerSearchController {
  async update(request: Request, response: Response) {
    const { search_id } = request.params;
    const status = request.body;

    try {
      const updatedSearch = await ParticipantAnswerSearch.update(
        search_id,
        status
      );

      return response.json(updatedSearch);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new ParticipantAnswerSearchController();
