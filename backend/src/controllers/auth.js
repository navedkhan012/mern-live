const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signup = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec(async (error, user) => {
    if (error) throw error;
    if (user) {
      return res.send({ status: false, message: "Email already in use" });
    }

    const { firstName, lastName, email, password } = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    console.log("hash_password", hash_password);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hash_password,
      hash_password,
      username: email,
    });

    newUser.save((error, data) => {
      if (error) throw error;
      res.send({ status: true, message: "Success!", user: data });
    });
  });
};

exports.signin = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) throw error;
    if (user) {
      if (user.authenticate(req.body.password)) {
        let token = jwt.sign(
          { _id: user._id, role: user.role },
          process.env.JWT_TOKEN,
          {
            expiresIn: "10d", // 10 day
          }
        );
        const { firstName, lastName, email, role, fullName } = user;
        res.cookie("token", token, { expiresIn: "10d" });
        return res.status(200).json({
          token,
          user: {
            _id: user._id,
            firstName,
            lastName,
            email,
            role,
            fullName,
          },
        });
      } else {
        return res.status(400).json({
          message: "invaild password",
        });
      }
    }

    const { firstName, lastName, email, password } = req.body;

    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      username: email,
    });

    newUser.save((error, data) => {
      if (error) throw error;
      res.send({ status: true, message: "Success!", user: data });
    });
  });
};

exports.signout = (req, res, next) => {
  res.clearCookie("token");
  res.status(200).json({
    message: "signout succefully...!",
  });
};
