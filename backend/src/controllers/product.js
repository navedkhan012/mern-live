const product = require("../models/product");
const slugify = require("slugify");

exports.createProduct = (req, res, next) => {
  // res.status(200).json({ file: req.files });  for check product picture
  const { name, price, desciption, quantity, category } = req.body;
  let productPictures = [];
  //   if condition for product picture
  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }
  const productObj = {
    name: name,
    slug: slugify(name),
    price: price,
    desciption: desciption,
    productPictures: productPictures,
    quantity: quantity,
    category: category,
    createdBy: req.user._id, // this is user
  };
  const products = new product(productObj);
  products.save((error, products) => {
    if (error) {
      return res.status(400).json({
        message: error,
      });
    }
    return res.status(201).json({ products });
  });
};
