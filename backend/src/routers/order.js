const express = require("express");
const router = express.Router();
const { requireSignIn } = require("../middleware");
const { addOrder, getOrder } = require("../controllers/order");

router.post("/addorder", requireSignIn, addOrder);

router.get("/getorder", requireSignIn, getOrder);

module.exports = router;
