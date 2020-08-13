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
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export default new ParticipantController();
