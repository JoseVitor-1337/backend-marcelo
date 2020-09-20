import AddParticipantIntoSearchUseCase from "./AddParticipantIntoSearchUseCase";
import { SaveParticipantInSearchIntoDatabase } from "@domain/search";
import { GetParticipantFromDatabase } from "@domain/participants";

const AddParticipantIntoSearch = new AddParticipantIntoSearchUseCase(
  new SaveParticipantInSearchIntoDatabase(),
  new GetParticipantFromDatabase()
);

export { AddParticipantIntoSearch };
