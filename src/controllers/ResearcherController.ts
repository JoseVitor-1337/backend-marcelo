import { Request, Response } from "express";
import { CreateResearcher } from "@usecases/researcher";
import { GetResearcher } from "@usecases/researcher";

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

  async show(request: Request, response: Response) {
    const id = String(request.headers.id);

    try {
      const researcher = await GetResearcher.findOne(id);

      return response.json(researcher);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new ResearcherController();
