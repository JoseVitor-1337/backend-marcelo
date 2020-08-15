import AddParticipantIntoSearchUseCase from "./AddParticipantIntoSearchUseCase";
import { SaveUserInSearchIntoDatabase } from "@domain/search";
import { GetParticipantFromDatabase } from "@domain/participants";

const AddParticipantIntoSearch = new AddParticipantIntoSearchUseCase(
  new SaveUserInSearchIntoDatabase(),
  new GetParticipantFromDatabase()
);

export { AddParticipantIntoSearch };
