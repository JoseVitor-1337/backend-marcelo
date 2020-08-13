import bcrypt from "bcryptjs";
import { ICreateAdminister } from "@protocols/adiminister/ICreateAdminiter";
import { IAdminister } from "@models/Administer";

class CreateAdministerUseCase {
  constructor(private createAdminister: ICreateAdminister) {}

  async create(administer: IAdminister) {
    const { email } = administer;

    let participantAlreadyExist = await this.createAdminister.findByEmailTheParticipant(
      email
    );

    let researcherAlreadyExist = await this.createAdminister.findByEmailTheResearcher(
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

    administer.password = await bcrypt.hash(administer.password, 10);

    await this.createAdminister.save(administer);
  }
}

export default CreateAdministerUseCase;
