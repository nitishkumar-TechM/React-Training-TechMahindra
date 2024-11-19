import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   console.log("log ", req.rawHeaders);
  res.send("<h1>Hello, World!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is About Page</h1>");
});

app.get("/contacts", (req, res) => {
  res.send("<h1>This is Contact Page</h1>");
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
