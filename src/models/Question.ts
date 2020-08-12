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
  },
  structure: {
    type: String,
    required: true,
  },
  stimulus: {
    type: String,
  },
  question: {
    type: Object,
    required: true,
  },
  answer: {
    type: Object,
    required: true,
  },
  alternatives: {
    type: [Object],
    required: true,
  },
  retries: {
    type: Number,
    min: 0,
  },
});

export default database.model<IQuestionsSchema>("Questions", QuestionsSchema);
