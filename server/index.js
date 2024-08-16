import router from "./routes/moviesroutes.js";
import connectDb from "./db/connect.js";
import express from "express";
import { config as configDotenv } from "dotenv";
configDotenv();
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/movies", router);
const start = async () => {
  await connectDb(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};
start();
export { app };