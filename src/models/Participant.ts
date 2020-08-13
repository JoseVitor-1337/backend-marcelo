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
  ethnicClassification: {
    type: String,
    required: true,
    match: [
      /^Mestiço$|^Pardo$|^Branco$|^Negro$|^Amarelo$/,
      "{VALUE} não está de acordo com o IBGE",
    ],
  },
  economicClassification: {
    type: String,
    required: true,
    enum: ["Classe baixa", "Classe média", "Classe alta"],
  },
  univercityOrSchoolName: {
    type: String,
    required: true,
    match: [
      /^[a-zA-Z][^0-9]{4,}$/,
      "{VALUE} nãoe é uma nome de escola/univercidade inválido",
    ],
    minlength: 4,
  },
  univercityOrSchoolType: {
    type: String,
    required: true,
    match: [/^Publica$|^Privada$/, "{VALUE} deve ser 'Publica' ou 'Privada'"],
  },
  sex: {
    type: String,
    required: true,
    match: [/^M$|^F$/, "{VALUE} deve ser ou 'Masculino' ou 'Feminino'"],
    enum: ["M", "F"],
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
      /^[\D\d]{2,}[@][a-z]{2,}[.][a-z]{2,}/,
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

export default database.model<IParticipantSchema>(
  "Participant",
  ParticipantSchema
);
