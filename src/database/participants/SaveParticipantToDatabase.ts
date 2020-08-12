import { ICreateParticipant } from "@protocols/participant/ICreateParticipant";

import Participant, { IParticipant } from "@models/Participant";
import Researcher from "@models/Researcher";

class SaveParticipantToDatabase implements ICreateParticipant {
  async findByEmailTheParticipant(email: string) {
    let participant = await Participant.findOne({ email }).lean();

    return participant ? true : false;
  }

  async findByEmailTheResearcher(email: string) {
    let researcher = await Researcher.findOne({ email }).lean();

    return researcher ? true : false;
  }

  async save(participant: IParticipant) {
    await Participant.create(participant);
  }
}

export { SaveParticipantToDatabase };
