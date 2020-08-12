import database from "../config/database";

interface IImage {
  path: String;
  alt: String;
}

export interface IAlternatives {
  option: String;
  answer?: String;
  image?: IImage;
  correct: Boolean;
}

interface IQuestionsSchema extends database.Document {
  type: String;
  question: String | IImage;
  answer: String | IImage;
  alternatives: IAlternatives[];
  retrues: Number;
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
