import database from "../config/database";

export interface IStatus {
  participantId?: string;
  answeredQuestions?: number;
  correctQuestions?: number[];
  status?: string;
  attempts?: number;
}

interface IResearchSchema extends database.Document {
  researcher: string;
  title: string;
  type: string;
  content: string;
  description: string;
  retries: number;
  MTS: string;
  interval: number;
  correctQuestions: number;
  wrongQuestions: number;
  participants: string[];
  questions: string[];
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
