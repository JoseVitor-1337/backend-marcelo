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
    match: [/^[a-zA-Z]{2,}$/, "{VALUE} nãe é um nome válido"],
  },
  schooling: {
    type: String,
    required: true,
    match: [/^Educação|^Ensino/, "{VALUE} está inválido"],
  },
  age: {
    type: Number,
    required: [true, `A idade é um campo obrigatório`],
    match: [/^[0-9]{1,2}$/, "Por favor, coloque uma idade coerente"],
  },
  cpf: {
    type: String,
    required: true,
    select: false,
    match: [/^\d{3}[.]\d{3}[.]\d{3}[-]\d{2}$/, "{VALUE} não é um CPF válido"],
  },
  univercityName: {
    type: String,
    required: true,
    match: [
      /^[a-zA-Z][^0-9]{4,}$/,
      "{VALUE} nãoe é uma nome de escola/univercidade inválido",
    ],
    minlength: 4,
  },
  univercityType: {
    type: String,
    required: true,
    match: [/^Publica$|^Privada$/, "{VALUE} deve ser 'Publica' ou 'Privada'"],
  },
  state: {
    type: String,
    required: true,
    match: [/^[A-Z]{2}$/, "Deve ser as siglas de um Estado"],
  },
  course: {
    type: String,
    required: true,
    match: [
      /^[a-zA-Z][^0-9]{4,}$/,
      "Deve conter apenas letras, e ter um tamanho maior que 4",
    ],
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/,
      "{VALUE} não é um email válido",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    match: [/^[\D\d]{3,}$/, "Apenas deve ser maior que 3"],
  },
});

export default database.model<IResearcherSchema>(
  "Researcher",
  ResearcherSchema
);
