import {
  IParticipantFilters,
  IGetAllParticipants,
} from "@protocols/participant";

import Participant from "@models/Participant";

class GetAllParticipantsFromDatabase implements IGetAllParticipants {
  async findAll(filters: IParticipantFilters) {
    const { name, univercityOrSchoolName, schooling } = filters;

    const participants = await Participant.find({
      $and: [
        {
          fullName: {
            $regex: name ? name : "",
          },
        },
        {
          univercityOrSchoolName: {
            $regex: univercityOrSchoolName ? univercityOrSchoolName : "",
          },
        },
        {
          schooling: {
            $regex: schooling ? schooling : "",
          },
        },
      ],
    });

    return participants;
  }
}

export { GetAllParticipantsFromDatabase };
