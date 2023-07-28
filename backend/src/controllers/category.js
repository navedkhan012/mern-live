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

exports.updateCategories = async (req, res, next) => {
  // res.status(200).json({ body: req.body });
  const { _id, name, parentId, type } = req.body;
  const updatedCategories = [];
  if (name instanceof Array) {
    console.log("yes true");
    for (let i = 0; i < name.length; i++) {
      const categorObj = {
        name: name[i],
        type: type[i] ?? "product",
      };
      if (parentId[i] !== "") {
        categorObj.parentId = parentId[i];
      }
      console.log("_id[i]", _id[i]);
      const updatedCategory = await category.findOneAndUpdate(
        { _id: _id[i] },
        categorObj,
        { new: true }
      );

      updatedCategories.push(updatedCategory);
    }
    return res.status(201).json({ updatedCategories });
  } else {
    console.log("yes false");
    const categorObj = {
      name,
      type,
    };
    if (parentId !== "") {
      categorObj.parentId = parentId;
    }
    const updatedCategory = await category.findOneAndUpdate(
      { _id },
      categorObj,
      { new: true }
    );
    return res.status(201).json({ updatedCategory });
  }
};
