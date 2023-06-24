const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// Routes
const authRouters = require("./src/routers/auth");
const categoryRouters = require("./src/routers/category");
const productRouters = require("./src/routers/product");

// env config
env.config();

// mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://admin:admin@cluster0.wjzkq.mongodb.net/mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("data base mongoose connected");
  });

app.use(express.json());

app.use("/api", authRouters);
app.use("/api", categoryRouters);
app.use("/api", productRouters);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
