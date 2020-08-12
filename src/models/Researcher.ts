import database from "../config/database";

export interface IResearcher {
  fullName: string;
  schooling: string;
  age: number;
  cpf: string;
  univercityName: string;
  univercityType: string;
  state: string;
  course: string;
  email: string;
  password: string;
}

interface IResearcherSchema extends database.Document, IResearcher {}

const ResearcherSchema = new database.Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 2,
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
    min: 0,
  },
  cpf: {
    type: String,
    required: true,
    select: false,
    match: /^\d{3}[.]\d{3}[.]\d{3}[-]\d{2}$/,
  },
  univercityName: {
    type: String,
    required: true,

    minlength: 5,
  },
  univercityType: {
    type: String,
    required: true,
    enum: ["Publica", "Privada"],
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

    minlength: 4,
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

export default database.model<IResearcherSchema>(
  "Researcher",
  ResearcherSchema
);
