import CreateParticipantUseCase from "./CreateParticipantUseCase";
import SaveParticipantToDatabase from "src/database/participants/SaveParticipantToDatabase";

const CreateParticipant = new CreateParticipantUseCase(
  SaveParticipantToDatabase
);

export { CreateParticipant };
