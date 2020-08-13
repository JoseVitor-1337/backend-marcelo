import {
  IGetAllParticipants,
  IParticipantFilters,
} from "@protocols/participant";

class GetAllParticipantsUseCase {
  constructor(private getAllParticipants: IGetAllParticipants) {}

  async find(filters: IParticipantFilters) {
    const participants = await this.getAllParticipants.findAll(filters);

    return participants;
  }
}

export default GetAllParticipantsUseCase;
