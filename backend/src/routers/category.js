const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategories,
  updateCategories,
} = require("../controllers/category");
const { requireSignIn } = require("../middleware");
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
  "/category/create",
  requireSignIn,
  upload.single("categoryImage"),
  createCategory
);

router.post(
  "/category/update",
  // requireSignIn,
  upload.single("categoryImage"),
  updateCategories
);

router.get("/getcategories", getCategories);

module.exports = router;
