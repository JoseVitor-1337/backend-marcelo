import database from "../config/database";

export type IParticipant = {
  fullName: string;
  schooling: string;
  age: number;
  ethnicClassification: string;
  economicClassification: string;
  univercityOrSchoolName: string;
  univercityOrSchoolType: string;
  sex: string;
  state: string;
  course: string;
  email: string;
  password: string;
};

interface IParticipantSchema extends database.Document, IParticipant {}

const ParticipantSchema = new database.Schema({
  fullName: {
    type: String,
    required: true,
  },
  schooling: {
    type: String,
    required: true,
    enum: [
      "Educação infantil",
      "Ensino fundamental",
      "Ensino médio",
      "Ensino superior",
    ],
  },
  age: {
    type: Number,
    required: true,
    max: 100,
    min: 3,
  },
  ethnicClassification: {
    type: String,
    required: true,
    enum: ["Mestiço", "Pardo", "Amarelo", "Branco", "Negro"],
  },
  economicClassification: {
    type: String,
    required: true,
    enum: ["Classe baixa", "Classe média", "Classe alta"],
  },
  univercityOrSchoolName: {
    type: String,
    required: true,

    minlength: 4,
  },
  univercityOrSchoolType: {
    type: String,
    required: true,
    enum: ["Publica", "Privada"],
  },
  sex: {
    type: String,
    required: true,
    enum: ["Masculino", "Feminino"],
  },
  state: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 2,
  },
  course: {
    type: String,
    required: true,

    minlength: 2,
  },
  email: {
    type: String,
    required: true,

    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

export default database.model<IParticipantSchema>(
  "Participant",
  ParticipantSchema
);
