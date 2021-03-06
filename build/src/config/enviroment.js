"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_SECRET = exports.DB_URL = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT;
exports.PORT = PORT;
const API_SECRET = process.env.SECRET;
exports.API_SECRET = API_SECRET;
const DB_URL = process.env.DATABASE_URL;
exports.DB_URL = DB_URL;
