import { CreateQuestionUseCase } from "./CreateQuestionUseCase";
import { SaveQuestionsIntoDatabase } from "@domain/question";
import { GetSearchFromDatabase } from "@domain/search/GetSearchFromDatabase";

const CreateQuestion = new CreateQuestionUseCase(
  new SaveQuestionsIntoDatabase(),
  new GetSearchFromDatabase()
);

export { CreateQuestion };
