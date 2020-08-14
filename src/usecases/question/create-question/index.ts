import { CreateQuestionUseCase } from "./CreateQuestionUseCase";
import { SaveQuestionsIntoDatabase } from "@domain/question";

const CreateQuestion = new CreateQuestionUseCase(
  new SaveQuestionsIntoDatabase()
);

export { CreateQuestion };
