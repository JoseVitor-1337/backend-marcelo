"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const enviroment_1 = require("../config/enviroment");
try {
    mongoose_1.default.connect(enviroment_1.DB_URL, {
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
}
catch (error) {
    throw new Error(`Erro ao se connectar ao Banco de dados: ${error}`);
}
exports.default = mongoose_1.default;
