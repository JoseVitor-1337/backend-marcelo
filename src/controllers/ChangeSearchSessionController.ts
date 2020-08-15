import { Request, Response } from "express";
import { ChangeSearchSession } from "@usecases/search/change-search-session";

class ChangeSearchSessionController {
  async update(request: Request, response: Response) {
    const { search_id } = request.params;
    const { open } = request.body;

    try {
      await ChangeSearchSession.update(search_id, open);

      let theReturn = open ? "Sessão aberta" : "Sessão fechada";

      return response.json({ message: theReturn });
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new ChangeSearchSessionController();
