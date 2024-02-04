const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

dotenv.config({ path: "./config.env" });
const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.err(`DB connection error: ${err.message}`));

const SERVER_PORT = process.env.PORT || 3000;

const server = app.listen(SERVER_PORT, () => {
  console.log(`Server started at: ${SERVER_PORT}`);
});
