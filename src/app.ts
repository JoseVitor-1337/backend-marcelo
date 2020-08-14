import express from "express";
import cors from "cors";
import routes from "./routes";
import path from "path";

const app = express();

app.use(cors());
app.use(
  "/uploads",
  express.static(path.resolve(__dirname, "..", "uploads", "images"))
);
app.use(express.json());
app.use(routes);

export default app;
