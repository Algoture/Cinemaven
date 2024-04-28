import express from "express";
import cors from "cors";
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = process.env.PORT || 5500;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDirectoryPath = path.join(__dirname, '../public');

// Serve static files from the public directory
app.use(express.static(publicDirectoryPath));

// Middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/json", (req, res) => {
  res.json({ "name": "Umesh" });
});

// Route for serving index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () =>
  console.log(`Server is live at http://localhost:${port}`)
);
