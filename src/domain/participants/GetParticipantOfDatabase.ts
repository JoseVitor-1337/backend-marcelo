import { IGetParticipant } from "@protocols/participant";

import Participant from "@models/Participant";

class GetParticipantOfDatabase implements IGetParticipant {
  async find(id: string) {
    const participant = await Participant.findById(id).lean();

    return participant;
  }
}

export { GetParticipantOfDatabase };
