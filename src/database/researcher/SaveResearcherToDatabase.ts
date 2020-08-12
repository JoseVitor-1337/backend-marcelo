import { ICreateResearcher } from "@protocols/researcher";
import Researcher, { IResearcher } from "@models/Researcher";

class SaveResearcherToDatabase implements ICreateResearcher {
  async findByEmail(email: string) {
    let researcher = await Researcher.findOne({ email }).lean();

    return researcher ? true : false;
  }

  async save(researcher: IResearcher) {
    await Researcher.create(researcher);
  }
}

export { SaveResearcherToDatabase };
