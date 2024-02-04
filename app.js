const express = require("express");
const restaurantRouter = require("./routes/restaurantRouter");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use("/", restaurantRouter);
app.use("/restaurants", restaurantRouter);

module.exports = app;
