const express = require("express");
const env = require("dotenv");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Routes
const userRouters = require("./src/routers/user");

// env config
env.config();

mongoose
  .connect("mongodb+srv://admin:admin@cluster0.wjzkq.mongodb.net/mern")
  .then(() => {
    console.log("data base mongoose connected");
  });

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// router call here we are using here middleware url present default
app.use("/api", userRouters);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
