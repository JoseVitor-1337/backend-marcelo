import database from "../config/database";

export interface IStatus {
  participantId?: String;
  answeredQuestions?: Number;
  correctQuestions?: Number[];
  status?: String;
  attempts?: Number;
}

interface IResearchSchema extends database.Document {
  researcher: String;
  title: String;
  type: String;
  content: String;
  description: String;
  retries: Number;
  MTS: String;
  interval: Number;
  correctQuestions: Number;
  wrongQuestions: Number;
  participants: String[];
  questions: String[];
  status: IStatus[];
}

const ResearchSchema = new database.Schema({
  researcher: {
    type: database.Schema.Types.ObjectId,
    required: true,
    ref: "Researcher",
  },
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  retries: {
    type: Number,
    min: 0,
  },
  MTS: {
    type: String,
    required: true,
    enum: ["Simultaneo", "Atrasado"],
  },
  interval: {
    type: Number,
    min: 1,
  },
  status: {
    type: [Object],
    default: [],
  },
  session: {
    type: String,
    default: "Aberto",
    enum: ["Aberto", "Fechado"],
  },
  participants: [
    {
      type: database.Schema.Types.ObjectId,
      ref: "Participant",
      default: [],
    },
  ],
  questions: [
    {
      type: database.Schema.Types.ObjectId,
      ref: "Questions",
      default: [],
    },
  ],
});

export default database.model<IResearchSchema>("Research", ResearchSchema);
