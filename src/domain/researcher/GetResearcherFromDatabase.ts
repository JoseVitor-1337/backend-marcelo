import { IGetResearcher } from "@protocols/researcher";
import Researcher from "@models/Researcher";

class GetResearcherFromDatabase implements IGetResearcher {
  async find(id: string) {
    const researcher = await Researcher.findById(id).lean();

    return researcher;
  }
}

export { GetResearcherFromDatabase };
