import { GetOneParticipantOfDatabase } from "@domain/participants";
import GetOneParticipantUseCase from "./GetOneParticiapantUseCase";

const GetOneParticipant = new GetOneParticipantUseCase(
  new GetOneParticipantOfDatabase()
);

export { GetOneParticipant };
