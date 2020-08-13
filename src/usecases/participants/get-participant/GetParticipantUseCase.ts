import { IGetParticipant } from "@protocols/participant";

class GetParticipantUseCase {
  constructor(private getParticipant: IGetParticipant) {}

  async findOne(id: string) {
    const participant = this.getParticipant.find(id);

    if (!participant) {
      throw new Error("O usuário não é um Participante");
    }

    return participant;
  }
}

export default GetParticipantUseCase;
