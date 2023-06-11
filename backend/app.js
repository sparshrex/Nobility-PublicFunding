require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
const mailRouter = require("./routes/mail");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", mailRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
