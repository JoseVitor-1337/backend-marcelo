import CreateParticipantUseCase from "./CreateParticipantUseCase";
import { SaveParticipantToDatabase } from "@domain/participants";

const CreateParticipant = new CreateParticipantUseCase(
  new SaveParticipantToDatabase()
);

export { CreateParticipant };
