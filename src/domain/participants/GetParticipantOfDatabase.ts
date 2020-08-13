import { IGetParticipant } from "@protocols/participant";

import Participant, { IParticipant } from "@models/Participant";

class GetParticipantOfDatabase implements IGetParticipant {
  async find(id: string): Promise<IParticipant> {
    const participant = await Participant.findById(id).lean();

    return participant;
  }
}

export { GetParticipantOfDatabase };
