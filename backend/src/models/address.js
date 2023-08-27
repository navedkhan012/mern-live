const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  address: { type: String, required: true },
  pinCode: { type: String, required: true },
  locality: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  landmark: { type: String },
  alernativePhone: { type: String },
  addressType: {
    type: String,
    enum: ["home", "work", "other"],
    required: true,
  },
});

const userAddressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
    address: [addressSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserAddress", userAddressSchema);
