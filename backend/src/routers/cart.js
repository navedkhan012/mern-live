const express = require("express");
const router = express.Router();
const { requireSignIn } = require("../middleware");
const { addItemToCart } = require("../controllers/cart");

router.post("/cart/addtocart", requireSignIn, addItemToCart);

module.exports = router;
