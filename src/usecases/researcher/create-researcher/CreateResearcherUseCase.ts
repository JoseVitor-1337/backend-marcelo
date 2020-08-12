import { ICreateResearcher } from "@protocols/researcher";
import { IResearcher } from "@models/Researcher";

class CreateParticipantUseCase {
  constructor(private createResearcher: ICreateResearcher) {}

  async create(researcher: IResearcher) {
    let researcherAlreadyExist = await this.createResearcher.findByEmail(
      researcher.email
    );

    if (researcherAlreadyExist === true) {
      throw new Error("Este email já está cadastrado na plataforma");
    }

    this.createResearcher.save(researcher);
  }
}

export default CreateParticipantUseCase;
