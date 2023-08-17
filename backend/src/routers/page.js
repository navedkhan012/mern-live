const express = require("express");
const { createPage, getProductPage } = require("../controllers/page");
const { upload, requireSignIn } = require("../middleware");
const router = express.Router();

router.post(
  "/page",
  requireSignIn,
  upload.fields([
    {
      name: "banners",
    },
    {
      name: "products",
    },
  ]),
  createPage
);

router.get("/page/:cid/:type", getProductPage);
module.exports = router;
