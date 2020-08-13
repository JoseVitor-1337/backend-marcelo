import { GetParticipantFromDatabase } from "@domain/participants";
import GetParticipantUseCase from "./GetParticipantUseCase";

const GetParticipant = new GetParticipantUseCase(
  new GetParticipantFromDatabase()
);

export { GetParticipant };
