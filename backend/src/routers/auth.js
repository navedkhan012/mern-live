const express = require("express");
const router = express.Router();

const { signup, signin, requireSignIn } = require("../controllers/auth");
const {
  validatorSignupRequest,
  isRequestValidated,
  validatorSigninRequest,
} = require("../validator/auth");

router.post("/signin", validatorSigninRequest, isRequestValidated, signin);

router.post("/signup", validatorSignupRequest, isRequestValidated, signup);

router.post("/profile", requireSignIn, (req, res) => {
  res.status(200).json({
    user: "profile",
  });
});

module.exports = router;
