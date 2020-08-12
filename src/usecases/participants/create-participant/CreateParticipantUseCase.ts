import { ICreateParticipant } from "@protocols/participant/ICreateParticipant";
import { IParticipant } from "@models/Participant";

class CreateParticipantUseCase {
  constructor(private createParticipant: ICreateParticipant) {}

  async create(participant: IParticipant) {
    let participantAlreadyExist = await this.createParticipant.findByEmail(
      participant.email
    );

    if (participantAlreadyExist === true) {
      throw new Error("Este email já está cadastrado na plataforma");
    }

    this.createParticipant.save(participant);
  }
}

export default CreateParticipantUseCase;
