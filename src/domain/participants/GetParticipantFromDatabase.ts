import { IGetParticipant } from "@protocols/participant";

import Participant from "@models/Participant";

class GetParticipantFromDatabase implements IGetParticipant {
  async find(id: string) {
    const participant = await Participant.findById(id).lean();

    return participant;
  }
}

export { GetParticipantFromDatabase };
