import { Request, Response } from "express";
import { AddParticipantIntoSearch } from "@usecases/search";

class ParticipantController {
  async create(request: Request, response: Response) {
    const { participantId, searchId } = request.body;

    try {
      const search = await AddParticipantIntoSearch.update(
        searchId,
        participantId
      );

      return response.json(search);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new ParticipantController();
