import database from "../config/database";
import { Document } from "mongoose";

export interface IAdminister {
  fullName: string;
  email: string;
  password: string;
}

interface IAdministerSchema extends Document, IAdminister {}

const AdministerSchema = new database.Schema({
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

export default database.model<IAdministerSchema>(
  "Administer",
  AdministerSchema
);
