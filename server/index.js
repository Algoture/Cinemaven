import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Start the server
app.listen(port, () =>
  console.log(`Server is live at http://localhost:${port}`)
);