import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;
const API_SECRET = process.env.SECRET || "secret";
const DB_URL = "mongodb://localhost:27017/pesquisas";

//   process.env.DATABASE_URL ||

export { PORT, DB_URL, API_SECRET };
