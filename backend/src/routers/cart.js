const express = require("express");
const router = express.Router();
const { requireSignIn } = require("../middleware");
const { addItemToCart, getCartItems } = require("../controllers/cart");

router.post("/cart/addtocart", requireSignIn, addItemToCart);
router.get("/cart/getcartitems", requireSignIn, getCartItems);

module.exports = router;
