import { ICreateParticipant } from "@protocols/participant/ICreateParticipant";
import { IParticipant } from "@models/Participant";

class CreateParticipantUseCase {
  constructor(private createParticipant: ICreateParticipant) {}

  async create(participant: IParticipant) {
    const { email } = participant;

    let participantAlreadyExist = await this.createParticipant.findByEmailTheParticipant(
      email
    );

    let researcherAlreadyExist = await this.createParticipant.findByEmailTheResearcher(
      email
    );

    if (participantAlreadyExist === true) {
      throw new Error(
        "Este email já está cadastrado na plataforma por um Participante"
      );
    }

    if (researcherAlreadyExist === true) {
      throw new Error(
        "Este email já está cadastrado na plataforma por um Pesquisador"
      );
    }

    this.createParticipant.save(participant);
  }
}

export default CreateParticipantUseCase;
