import { Request, Response } from "express";
import { CreateAdminister, GetAdminister } from "@usecases/administer";

class ParticipantController {
  async create(request: Request, response: Response) {
    const { fullName } = request.body;

    try {
      await CreateAdminister.create(request.body);

      return response.json({
        message: `Olá ${fullName}, usa conta de administrador foi criada com sucesso!`,
      });
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }

  async show(request: Request, response: Response) {
    const id = String(request.headers.id);

    try {
      const administer = await GetAdminister.findOne(id);

      return response.json(administer);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new ParticipantController();
