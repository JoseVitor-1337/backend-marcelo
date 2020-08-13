import { IParticipant } from "@models/Participant";

export interface IParticipantFilters {
  name?: string;
  univercityOrSchoolName?: string;
  schooling?: string;
}

export interface IGetAllParticipants {
  findAll(filters?: IParticipantFilters): Promise<IParticipant[]>;
}
