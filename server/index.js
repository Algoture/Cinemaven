import router from "./routes/moviesroutes.js";
import connectDb from "./db/connect.js";
import express from "express";
import cors from "cors";
import { config as configDotenv } from "dotenv";
configDotenv();
const app = express();
app.use(
  cors({
    origin: `${process.env.CLIENT_URL}`,
  })
);
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Welcome To Cinemaven API");
});

app.use("/api/movies", router);
const start = async () => {
  await connectDb(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Server is running`);
  });
};
start();
export { app };