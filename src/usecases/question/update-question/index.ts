import { UpdateQuestionUseCase } from "./UpdateQuestionUseCase";
import { UpdateQuestionFromDatabase } from "@domain/question";

const UpdateQuestion = new UpdateQuestionUseCase(
  new UpdateQuestionFromDatabase()
);

export { UpdateQuestion };
