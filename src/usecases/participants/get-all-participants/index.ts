import GetAllParticipantsUseCase from "./GetAllParticipantsUseCase";
import { GetAllParticipantsFromDatabase } from "@domain/participants";

const GetAllParticipants = new GetAllParticipantsUseCase(
  new GetAllParticipantsFromDatabase()
);

export { GetAllParticipants };
