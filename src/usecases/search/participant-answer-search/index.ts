import ParticipantAnswerSearchUseCase from "./ParticipantAnswerSearchUseCase";
import { SaveParticipantResponsesIntoDatabase } from "@domain/search/SaveParticipantResponsesIntoDatabase";
import { GetSearchFromDatabase } from "@domain/search/GetSearchFromDatabase";

const ParticipantAnswerSearch = new ParticipantAnswerSearchUseCase(
  new SaveParticipantResponsesIntoDatabase(),
  new GetSearchFromDatabase()
);

export { ParticipantAnswerSearch };
