const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const { signup } = require("./controller/user.controller");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("view"));

app.get("/", (req, res) => {
  res.send("Success");
});

app.post("/signup", signup);

const PORT = process.env.PORT || 8080;
const DB_URI = process.env.DB;

if (!DB_URI) {
  console.error("Missing DB value in .env");
  process.exit(1);
}

mongoose
  .connect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err.message);
  });
