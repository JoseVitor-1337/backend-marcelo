import { GetParticipantOfDatabase } from "@domain/participants";
import GetParticipantUseCase from "./GetParticipantUseCase";

const GetParticipant = new GetParticipantUseCase(
  new GetParticipantOfDatabase()
);

export { GetParticipant };
