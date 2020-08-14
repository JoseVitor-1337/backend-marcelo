import database from "../config/database";

export interface IStatus {
  participantId?: string;
  answeredQuestions?: number;
  correctQuestions?: number[];
  status?: string;
  attempts?: number;
}

export interface ISearch {
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

interface ISearchSchema extends database.Document, ISearch {}

const SearchSchema = new database.Schema({
  researcher: {
    type: database.Schema.Types.ObjectId,
    required: true,
    ref: "Researcher",
  },
  title: {
    type: String,
    required: true,
    match: [/^[\D\d]{3,}$/, "{VALUE} deve ter um tamanho maior que 3"],
  },
  type: {
    type: String,
    required: true,
    match: [/^[\D\d]{3,}$/, "{VALUE} deve ter um tamanho maior que 3"],
  },
  content: {
    type: String,
    required: true,
    match: [/^[\D\d]{5,}$/, "{VALUE} deve ter um tamanho maior que 5"],
  },
  description: {
    type: String,
    required: true,
    match: [/^[\D\d]{6,}$/, "{VALUE} deve ter um tamanho maior que 6"],
  },
  retries: {
    type: Number,
    min: [0, "{VALUE} deve ser um número inteiro maior ou igual a 0"],
  },
  MTS: {
    type: String,
    required: true,
    match: [
      /^Simultaneo$|^Atrasado$/,
      "{VALUE} deve ser 'Simultaneo' ou 'Atrasado'",
    ],
  },
  interval: {
    type: Number,
    min: [1, "{VALUE} deve ser um número inteiro maior ou igual a 1"],
  },
  status: {
    type: [Object],
    default: [],
  },
  session: {
    type: String,
    default: "Aberto",
    match: [/^Aberto$|^Fechado$/, "{VALUE} deve ser 'Aberto' ou 'Fechado'"],
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

export default database.model<ISearchSchema>("Research", SearchSchema);
