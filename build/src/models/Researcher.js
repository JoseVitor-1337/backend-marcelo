"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const ResearcherSchema = new database_1.default.Schema({
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
exports.default = database_1.default.model("Researcher", ResearcherSchema);
