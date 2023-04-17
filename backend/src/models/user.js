const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    username: {
      type: String,
      required: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      uniqe: true,
      lowercase: true,
    },
    harsh_password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "mod", "admin"],
      default: "admin",
    },
    contactNumber: {
      type: String,
    },
    profilePicture: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.virtual("password").set(function (password) {
  this.harsh_password = bcrypt.hashSync(password, 10);
});

userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.harsh_password);
  },
};

module.exports = mongoose.model("User", userSchema);
