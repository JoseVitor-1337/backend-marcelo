"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const cors_1 = __importDefault(require("cors"));
const enviroment_1 = require("./config/enviroment");
app_1.default.use(cors_1.default());
app_1.default.listen(process.env.PORT || enviroment_1.PORT, () => {
    console.log(`Server is running on http://localhost:${enviroment_1.PORT}`);
});
