"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAdminister = void 0;
const GetAdminister_1 = __importDefault(require("./GetAdminister"));
const administer_1 = require("@domain/administer");
const GetAdminister = new GetAdminister_1.default(new administer_1.GetAdministerFromDatabase());
exports.GetAdminister = GetAdminister;
