import { ICreateResearcher } from "@protocols/researcher";

import Researcher, { IResearcher } from "@models/Researcher";
import Participant from "@models/Participant";

class SaveResearcherToDatabase implements ICreateResearcher {
  async findByEmailTheParticipant(email: string) {
    let participant = await Participant.findOne({ email }).lean();

    return participant ? true : false;
  }

  async findByEmailTheResearcher(email: string) {
    let researcher = await Researcher.findOne({ email }).lean();

    return researcher ? true : false;
  }

  async save(researcher: IResearcher) {
    await Researcher.create(researcher);
  }
}

export { SaveResearcherToDatabase };
