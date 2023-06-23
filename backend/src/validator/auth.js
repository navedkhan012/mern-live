const { check, validationResult } = require("express-validator");

module.exports.validatorSignupRequest = [
  check("firstName", "Please fill firstName").notEmpty(),
  check("lastName", "Please fill lastName").notEmpty(),
  check("email", "Please fill email").isEmail(),
  check("password", "Please add lenth in your password").isLength({ min: 4 }),
];
module.exports.validatorSigninRequest = [
  check("email", "Please fill email").isEmail(),
  check("password", "Please add lenth in your password").isLength({ min: 4 }),
];

exports.isRequestValidated = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.array().length !== 0) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  next();
};
