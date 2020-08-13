import { IGetParticipant } from "@protocols/participant";

class GetParticipantUseCase {
  constructor(private getParticipant: IGetParticipant) {}

  async findOne(id: string) {
    const participant = await this.getParticipant.find(id);

    console.log(participant);

    if (!participant) {
      throw new Error("O usuário não é um Participante");
    }

    return participant;
  }
}

export default GetParticipantUseCase;
