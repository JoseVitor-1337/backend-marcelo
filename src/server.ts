import app from "./app";
import cors from "cors";
import { PORT } from "./config/enviroment";

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
