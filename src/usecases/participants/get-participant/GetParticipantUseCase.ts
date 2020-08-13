import { IGetParticipant } from "@protocols/participant";

class GetParticipantUseCase {
  constructor(private getParticipant: IGetParticipant) {}

  async findOne(id: string) {
    const participants = this.getParticipant.find(id);

    if (!participants) {
      throw new Error("O usuário não é um Participante");
    }

    return participants;
  }
}

export default GetParticipantUseCase;
