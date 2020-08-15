import ParticipantAnswerSearchUseCase from "./ParticipantAnswerSearchUseCase";
import { SaveParticipantResponsesIntoDatabase } from "@domain/search";
import { GetSearchFromDatabase } from "@domain/search";

const ParticipantAnswerSearch = new ParticipantAnswerSearchUseCase(
  new SaveParticipantResponsesIntoDatabase(),
  new GetSearchFromDatabase()
);

export { ParticipantAnswerSearch };
