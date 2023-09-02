const express = require("express");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const path = require("path");
const cors = require("cors");

// Routes
const authRouters = require("./src/routers/auth");
const categoryRouters = require("./src/routers/category");
const productRouters = require("./src/routers/product");
const cartRouters = require("./src/routers/cart");
const initialdataRouters = require("./src/routers/initialdata");
const pageRouters = require("./src/routers/page");
const addressRouters = require("./src/routers/address");
const orderRouters = require("./src/routers/order");

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

app.use(cors());

app.use(express.json());
// This below line for folder readable for browser
app.use(express.static(path.join(__dirname, "src/uploads")));
app.use("/api", authRouters);
app.use("/api", categoryRouters);
app.use("/api", productRouters);
app.use("/api", cartRouters);
app.use("/api", initialdataRouters);
app.use("/api", pageRouters);
app.use("/api", addressRouters);
app.use("/api", orderRouters);

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
