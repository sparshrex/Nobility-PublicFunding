const express = require("express");
const app = express();
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const year = new Date().getFullYear();
  console.log(method, url, year);
  next();
};
app.get("/", logger, (req, res) => {
  res.send('<h1>Home</h1><a href="/about">about</a>');
});
app.get("/about", logger, (req, res) => {
  res.send('<h1>about</h1><a href="/">home</a>');
});
app.listen(5000, () => {
  console.log("server running on port 5000");
});
