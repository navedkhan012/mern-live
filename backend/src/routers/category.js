const express = require("express");
const router = express.Router();
const { createCategory, getCategories } = require("../controllers/category");
const { requireSignIn } = require("../middleware");

router.post("/category/create", requireSignIn, createCategory);

router.get("/getcategories", getCategories);

module.exports = router;
