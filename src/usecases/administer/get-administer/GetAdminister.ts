import { IGetAdminister } from "@protocols/adiminister/IGetAdminister";

class GetAdministerUseCase {
  constructor(private getAdminister: IGetAdminister) {}

  async findOne(id: string) {
    const administer = await this.getAdminister.find(id);

    if (!administer) {
      throw new Error("O usuário não é um Administrador");
    }

    return administer;
  }
}

export default GetAdministerUseCase;
