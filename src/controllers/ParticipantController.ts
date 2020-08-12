import { Request, Response } from "express";
import { CreateParticipant } from "@usecases/participants";

class ParticipantController {
  async create(request: Request, response: Response) {
    const { fullName } = request.body;

    try {
      let createParticipant = CreateParticipant;

      await createParticipant.create(request.body);

      return response.json({
        message: `Participant ${fullName} foi cadastrado com sucesso`,
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export default new ParticipantController();
