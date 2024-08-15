import express from "express";
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const start = async () => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
};
start();
export { app };
