const jwt = require("jsonwebtoken");
exports.requireSignIn = (req, res, next) => {
  if (req.headers.authorization) {
    const token = req.headers.authorization;
    const user = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = user;
  } else {
    return res.status(400).json({
      message: "invalid token",
    });
  }

  next();
};

exports.isAdminrequire = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(400).json({
      message: "Admin Access Denied",
    });
  }
  next();
};
