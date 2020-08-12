import { ICreateResearcher } from "@protocols/researcher";
import { IResearcher } from "@models/Researcher";

class CreateParticipantUseCase {
  constructor(private createResearcher: ICreateResearcher) {}

  async create(researcher: IResearcher) {
    const { email } = researcher;

    let participantAlreadyExist = await this.createResearcher.findByEmailTheParticipant(
      email
    );

    let researcherAlreadyExist = await this.createResearcher.findByEmailTheResearcher(
      email
    );

    if (participantAlreadyExist === true) {
      throw new Error(
        "Este email já está cadastrado na plataforma por uma Participante"
      );
    }

    if (researcherAlreadyExist === true) {
      throw new Error(
        "Este email já está cadastrado na plataforma por um Pesquisador"
      );
    }

    this.createResearcher.save(researcher);
  }
}

export default CreateParticipantUseCase;
