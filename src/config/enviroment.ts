import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.API_PORT || 5000;
const DB_URL = process.env.DATABASE_URL;

export { PORT, DB_URL };
