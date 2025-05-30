
import express from "express";
import cors from "cors";
import gamesRoutes from "./routes/games.js"


dotenv.config();

const app = express();

app.use(
    cors({
      origin: "http://localhost:5173", 
      credentials: true, 
    })
  );

  app.use("/api/games", gamesRoutes)

  export default app;