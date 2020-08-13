import { ICreateAdminister } from "@protocols/adiminister/ICreateAdminiter";
import Participant from "@models/Participant";
import Researcher from "@models/Researcher";
import Administer, { IAdminister } from "@models/Administer";

class SavaAdministerIntoDatabase implements ICreateAdminister {
  async findByEmailTheParticipant(email: string) {
    let participant = await Participant.findOne({ email }).lean();

    return participant ? true : false;
  }

  async findByEmailTheResearcher(email: string) {
    let researcher = await Researcher.findOne({ email }).lean();

    return researcher ? true : false;
  }

  async save(administer: IAdminister) {
    await Administer.create(administer);
  }
}

export { SavaAdministerIntoDatabase };
