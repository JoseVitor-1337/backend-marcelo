import CreateParticipantUseCase from "./CreateParticipantUseCase";
import { SaveParticipantToDatabase } from "src/database/participants";

const CreateParticipant = new CreateParticipantUseCase(
  new SaveParticipantToDatabase()
);

export { CreateParticipant };
