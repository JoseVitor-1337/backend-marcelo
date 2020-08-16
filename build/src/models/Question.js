"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const QuestionsSchema = new database_1.default.Schema({
    type: {
        type: String,
        required: true,
        match: [/^[\D\d]{3,}$/, "{VALUE} nãe é um tipo válido"],
    },
    structure: {
        type: String,
        required: true,
        match: [/^[\D\d]{3,}$/, "{VALUE} nãe é um estrutura válido"],
    },
    stimulus: {
        type: String,
        match: [/^[\D\d]{3,}$/, "{VALUE} nãe é um tipo de estímulo válido"],
    },
    question: {
        type: Object,
        required: true,
        match: [/^[\D\d]{3,}$/, "{VALUE} nãe é uma pergunta válido"],
    },
    answer: {
        type: Object,
        required: true,
        match: [/^[\D\d]{3,}$/, "{VALUE} nãe é uma resposta válido"],
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
exports.default = database_1.default.model("Questions", QuestionsSchema);
