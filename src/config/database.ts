import mongoose from "mongoose";

import { DB_URL } from "../config/enviroment";

try {
  mongoose.connect(DB_URL, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
} catch (error) {
  throw new Error(`Erro ao se connectar ao Banco de dados: ${error}`);
}

export default mongoose;
