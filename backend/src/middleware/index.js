const jwt = require("jsonwebtoken");
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
exports.upload = multer({ storage });
