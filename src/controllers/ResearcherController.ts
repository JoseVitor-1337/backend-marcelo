import { Request, Response } from "express";
import { CreateResearcher } from "@usecases/researcher";

class ResearcherController {
  async create(request: Request, response: Response) {
    const { fullName } = request.body;

    try {
      let createResearcher = CreateResearcher;

      await createResearcher.create(request.body);

      return response.json({
        message: `O Pesquisador ${fullName} foi cadastrado com sucesso`,
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    }
  }
}

export default new ResearcherController();
