const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const path = require("path");

// Routes
const authRouters = require("./src/routers/auth");
const categoryRouters = require("./src/routers/category");
const productRouters = require("./src/routers/product");
const cartRouters = require("./src/routers/cart");

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
// this below line for folder readable for browser
app.use(express.static(path.join(__dirname, "src/uploads")));
app.use("/api", authRouters);
app.use("/api", categoryRouters);
app.use("/api", productRouters);
app.use("/api", cartRouters);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
