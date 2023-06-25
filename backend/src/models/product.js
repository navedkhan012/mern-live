const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true },
    price: { type: Number, required: true },
    desciption: { type: String, required: true },
    offser: { type: String },
    productPictures: [
      {
        img: { type: String },
      },
    ],
    reviews: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: `User` },
        review: { type: String },
      },
    ],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `User`,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: `Category`,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
