const express = require("express");
const router = express.Router();
const { requireSignIn } = require("../middleware");
const { initialdata } = require("../controllers/initialdata");

router.get("/initialdata", initialdata);

module.exports = router;
