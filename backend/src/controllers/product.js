const product = require("../models/product");
const category = require("../models/category");
const slugify = require("slugify");

const createProduct = (req, res, next) => {
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

const getProductBySlug = (req, res, next) => {
  const { slug } = req.params;
  category
    .findOne({ slug: slug })
    .select("_id")
    .exec((error, category) => {
      if (error) {
        return res.status(400).json({ error });
      }
      if (category) {
        product.find({ category: category._id }).exec((error, products) => {
          if (error) {
            return res.status(400).json({ error });
          }
          res.status(200).json({
            products,
            productByPrice: {
              under5k: products.filter((product) => product.price <= 5000),
              under10k: products.filter(
                (product) => product.price > 5000 && product.price <= 10000
              ),
              under15k: products.filter(
                (product) => product.price > 10000 && product.price <= 15000
              ),
              under20k: products.filter(
                (product) => product.price > 15000 && product.price <= 20000
              ),
              under30k: products.filter(
                (product) => product.price > 20000 && product.price <= 30000
              ),
            },
          });
        });
      }
    });
};

const getProductById = (req, res, next) => {
  const { productId } = req.params;
  console.log("productId", productId);
  product.findById({ _id: productId }).exec((error, product) => {
    if (error) {
      return res.status(400).json({
        message: error,
      });
    }
    return res.status(200).json({ product });
  });
};

module.exports = {
  createProduct,
  getProductBySlug,
  getProductById,
};
