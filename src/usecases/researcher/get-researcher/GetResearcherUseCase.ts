import { IGetResearcher } from "@protocols/researcher";

class GetResearcherUseCase {
  constructor(private getResearcher: IGetResearcher) {}

  async findOne(id: string) {
    const researcher = await this.getResearcher.find(id);

    if (!researcher) {
      throw new Error("O usuário não é um Pesquisador");
    }

    return researcher;
  }
}

export default GetResearcherUseCase;
