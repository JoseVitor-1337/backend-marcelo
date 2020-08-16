"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAdminister = void 0;
const CreateAdministerUseCase_1 = __importDefault(require("./CreateAdministerUseCase"));
const administer_1 = require("@domain/administer");
const CreateAdminister = new CreateAdministerUseCase_1.default(new administer_1.SavaAdministerIntoDatabase());
exports.CreateAdminister = CreateAdminister;
