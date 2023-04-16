const User = require("../models/user");
exports.signup = (req, res, next) => {
  User.findOne({ email: req.body.email }).exec((error, user) => {
    if (error) throw error;
    if (user) {
      return res.send({ status: false, message: "Email already in use" });
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
