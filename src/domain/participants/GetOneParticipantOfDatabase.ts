import { IGetOneParticipant } from "@protocols/participant";

import Participant, { IParticipant } from "@models/Participant";

class GetOneParticipantOfDatabase implements IGetOneParticipant {
  async get(id: string): Promise<IParticipant> {
    const participant = await Participant.findById(id).lean();

    return participant;
  }
}

export { GetOneParticipantOfDatabase };
