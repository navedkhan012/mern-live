const express = require("express");
const router = express.Router();
const { requireSignIn } = require("../middleware");
const { createProduct } = require("../controllers/product");
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignIn,
  upload.array("productPictures"),
  createProduct
);

router.get("/getproducts", requireSignIn, createProduct);

module.exports = router;