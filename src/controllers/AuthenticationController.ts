import { Request, Response } from "express";
import { Authentication } from "@usecases/authentication";

class ParticipantController {
  async create(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const authentication = Authentication;

      console.log(request.body);

      let token = await authentication.makeAuthentication(email, password);

      return response.json({ token });
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new ParticipantController();
