import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;
const API_SECRET = process.env.SECRET;
const DB_URL = process.env.DATABASE_URL;

export { PORT, DB_URL, API_SECRET };
