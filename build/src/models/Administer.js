"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const AdministerSchema = new database_1.default.Schema({
    fullName: {
        type: String,
        match: [/^[a-zA-Z]{2,}$/, "{VALUE} não é um nome válido"],
    },
    email: {
        type: String,
        unique: [true, "Este email já está cadastrado no sistema"],
        match: [
            /^[\D\d]{2,}[@][a-z]{2,}[.][a-z]{2,}/,
            "{VALUE} não é um email válido",
        ],
    },
    password: {
        type: String,
        select: false,
        match: [/^[\D\d]{3,}$/, "Apenas deve ser maior que 3"],
    },
});
exports.default = database_1.default.model("Administer", AdministerSchema);
