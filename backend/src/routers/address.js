const express = require("express");
const router = express.Router();
const { requireSignIn } = require("../middleware");
const { addAddress, getAddress } = require("../controllers/address");

router.post("/address/create", requireSignIn, addAddress);
router.get("/address/getaddress", requireSignIn, getAddress);

module.exports = router;
