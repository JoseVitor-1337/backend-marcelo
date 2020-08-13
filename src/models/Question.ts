import database from "../config/database";

interface IImage {
  path: string;
  alt: string;
}

export interface IAlternatives {
  option: string;
  answer?: string;
  image?: IImage;
  correct: boolean;
}

interface IQuestionsSchema extends database.Document {
  type: string;
  question: string | IImage;
  answer: string | IImage;
  alternatives: IAlternatives[];
  retrues: boolean;
}

const QuestionsSchema = new database.Schema({
  type: {
    type: String,
    required: true,
    match: [/^[a-zA-Z]{4,}$/, "{VALUE} nãe é um tipo válido"],
  },
  structure: {
    type: String,
    required: true,
    match: [/^[a-zA-Z]{4,}$/, "{VALUE} nãe é um estrutura válido"],
  },
  stimulus: {
    type: String,
    match: [/^[a-zA-Z]{4,}$/, "{VALUE} nãe é um tipo de estímulo válido"],
  },
  question: {
    type: Object,
    required: true,
    match: [/^[a-zA-Z]{4,}$/, "{VALUE} nãe é uma pergunta válido"],
  },
  answer: {
    type: Object,
    required: true,
    match: [/^[a-zA-Z]{4,}$/, "{VALUE} nãe é uma resposta válido"],
  },
  alternatives: {
    type: [Object],
    required: true,
  },
  retries: {
    type: Number,
    min: [0, "{VALUE} deve ser um número inteiro maior ou igual a 0"],
  },
});

export default database.model<IQuestionsSchema>("Questions", QuestionsSchema);
