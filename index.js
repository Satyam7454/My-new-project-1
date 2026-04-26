const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB);

const express = require("express");
const morgan = require("morgan");
const { use } = require("react");
const app = express();
app.listen(process.env.PORT);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("view"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/view/index.html");
});
