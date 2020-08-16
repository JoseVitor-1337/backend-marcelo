"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const SearchSchema = new database_1.default.Schema({
    researcher: {
        type: database_1.default.Schema.Types.ObjectId,
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
        min: [1, "{VALUE} deve ser um número inteiro maior ou igual a 0"],
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
        default: "Aberta",
        match: [/^Aberta$|^Fechada$/, "{VALUE} deve ser 'Aberta' ou 'Fechada'"],
    },
    participants: [
        {
            type: database_1.default.Schema.Types.ObjectId,
            ref: "Participant",
            default: [],
        },
    ],
    questions: [
        {
            type: database_1.default.Schema.Types.ObjectId,
            ref: "Questions",
            default: [],
        },
    ],
});
exports.default = database_1.default.model("Search", SearchSchema);
