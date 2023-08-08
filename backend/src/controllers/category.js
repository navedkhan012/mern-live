const Category = require("../models/category");
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
  if (req.body.type) {
    categoryObj.type = req.body.type;
  }

  const cat = new Category(categoryObj);
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
      type: cate.type,
      children: createCategories(categories, cate._id),
    });
  }
  return categoroyList;
}

exports.getCategories = (req, res, next) => {
  Category.find({}).exec((error, categories) => {
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
  const { _id, name, parentId, type } = req.body;
  const updatedCategories = [];
  if (name instanceof Array) {
    for (let i = 0; i < name.length; i++) {
      const categorObj = {
        name: name[i],
        type: type[i] ?? "product",
      };
      if (parentId[i] !== "") {
        categorObj.parentId = parentId[i];
      }
      const updatedCategory = await Category.findOneAndUpdate(
        { _id: _id[i] },
        categorObj,
        { new: true }
      );

      updatedCategories.push(updatedCategory);
    }
    return res.status(201).json({ updatedCategories });
  } else {
    const categorObj = {
      name,
      type,
    };
    if (parentId !== "") {
      categorObj.parentId = parentId;
    }
    const updatedCategory = await Category.findOneAndUpdate(
      { _id },
      categorObj,
      { new: true }
    );
    return res.status(201).json({ updatedCategory });
  }
};

exports.deleteCategories = async (req, res, next) => {
  const { ids } = req.body.payload;
  const deletedCategories = [];
  for (let i = 0; i < ids.length; i++) {
    let deleteCategory = await Category.findOneAndDelete({
      _id: ids[i],
    });
    deletedCategories.push(deleteCategory);
  }
  if (deletedCategories.length == ids.length) {
    return res.status(201).json({ message: "deleted done" });
  } else {
    return res.status(400).json({ message: "Something went wrong" });
  }
};
