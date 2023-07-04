const category = require("../models/category");
const slugify = require("slugify");

exports.createCategory = (req, res, next) => {
  let categoryUrl;

  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };
  if (req.file) {
    categoryUrl = process.env.URL_CAT_IMG + "/public/" + req.file.filename;
    categoryObj.categoryImage = categoryUrl;
  }
  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  const cat = new category(categoryObj);
  cat.save((error, category) => {
    if (error) {
      return res.status(400).json({
        message: "category api issue",
      });
    }
    // we don't need this if condition
    // if (category) {
    //   return res.status(201).json({ category });
    // }
    return res.status(201).json({ category });
  });
};

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

exports.getCategories = (req, res, next) => {
  category.find({}).exec((error, categories) => {
    if (error) {
      return res.status(400).json({
        message: "getCategories api issue",
      });
    }

    const categoroyList = createCategories(categories);

    return res.status(200).json({
      categoroyList,
    });
  });
};
