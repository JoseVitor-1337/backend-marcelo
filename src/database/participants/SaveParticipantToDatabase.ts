import { ICreateParticipant } from "@protocols/participant/ICreateParticipant";
import Participant, { IParticipant } from "@models/Participant";

class SaveParticipantToDatabase implements ICreateParticipant {
  async findByEmail(email: string) {
    let participant = await Participant.findOne({ email }).lean();

    return participant ? true : false;
  }

  async save(participant: IParticipant) {
    await Participant.create(participant);
  }
}

export { SaveParticipantToDatabase };
