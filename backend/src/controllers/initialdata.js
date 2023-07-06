const category = require("../models/category");
const product = require("../models/product");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

function createCategories(categories, parentId = null) {
  const categoroyList = [];
  let category;
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }
  for (const cate of category) {
    categoroyList.push({
      _id: cate._id,
      name: cate.name,
      slug: cate.slug,
      parentId: cate.parentId,
      children: createCategories(categories, cate._id),
    });
  }
  return categoroyList;
}

exports.initialdata = async (req, res, next) => {
  const categories = await category.find({});
  const products = await product
    .find({})
    .populate({ path: "category", select: "_id name" });
  // .select("_id name category")
  // .populate("category");

  res.status(200).json({
    categories: createCategories(categories),
    products,
  });
};
