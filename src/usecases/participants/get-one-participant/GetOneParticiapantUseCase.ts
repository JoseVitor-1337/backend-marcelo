import { IGetOneParticipant } from "@protocols/participant";

class GetOneParticipantUseCase {
  constructor(private getParticipant: IGetOneParticipant) {}

  async getOne(id: string) {
    const participants = this.getParticipant.get(id);

    return participants;
  }
}

export default GetOneParticipantUseCase;
