const express = require("express");
const { createPage } = require("../controllers/page");
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

module.exports = router;
