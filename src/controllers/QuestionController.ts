import { Request, Response } from "express";
import { CreateQuestion, UpdateQuestion } from "@usecases/question";

class QuestionController {
  async create(request: Request, response: Response) {
    const { search_id } = request.params;
    try {
      await CreateQuestion.create(search_id, request.body);

      return response.json({ message: "Pergunta criada com sucesso!" });
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }

  async update(request: Request, response: Response) {
    const questionId = request.params.id as string;

    try {
      const updatedQuestion = await UpdateQuestion.update(
        questionId,
        request.body
      );

      return response.status(200).json(updatedQuestion);
    } catch (error) {
      return response.status(400).json({
        message: error.message,
      });
    }
  }
}

export default new QuestionController();
