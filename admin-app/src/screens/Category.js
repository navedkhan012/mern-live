// 31 mint 14 video
import React, { useEffect, useState } from "react";
import { Layout } from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import { addCategory, getAllCategories } from "../actions/category";
import ModalPopUp from "../components/ModalPopUp";
import { Button, Form } from "react-bootstrap";

/**
 * @author
 * @function Category
 **/

const Category = (props) => {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [parentId, setParentId] = useState("");
  const [categoryImage, setCategoryImage] = useState({});
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const renderCategoryList = (categories) => {
    const categoriesArr = [];
    for (const cat of categories) {
      categoriesArr.push(
        <li>
          {cat.name}
          {cat.children.length > 0 ? (
            <ul>
              <li>{renderCategoryList(cat.children)}</li>
            </ul>
          ) : null}
        </li>
      );
    }
    return categoriesArr;
  };

  const optionCategoryList = (categories, options = []) => {
    for (const cat of categories) {
      options.push({
        value: cat._id,
        name: cat.name,
      });
      if (cat.children.length > 0) {
        optionCategoryList(cat.children, options);
      }
    }
    return options;
  };

  const handleChangeImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const handleCategorySave = () => {
    const form = new FormData();
    form.append("name", categoryName);
    form.append("parentId", parentId);
    form.append("categoryImage", categoryImage);
    // const cat = {
    //   categoryName: categoryName,
    //   parentId: parentId,
    //   categoryImage: categoryImage,
    // };
    // console.log("cat------>", cat);
    dispatch(addCategory(form));
  };
  return (
    <div>
      <Layout sidebar>
        <Button variant="primary" onClick={() => setShow(true)}>
          Add Category
        </Button>
        <h2>Category</h2>
        <div class="table-responsive small">
          <ul>{renderCategoryList(categories.categories)}</ul>
        </div>
      </Layout>

      <ModalPopUp
        heading="Add category"
        handleShow={show}
        handleClose={() => setShow(false)}
        handleSave={handleCategorySave}
      >
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Category name</Form.Label>
            <Form.Control
              type="text"
              placeholder="category name"
              value={categoryName}
              onChange={(e) => setCategoryName(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Category image</Form.Label>
            <Form.Control type="file" onChange={handleChangeImage} />
          </Form.Group>

          <Form.Select
            aria-label="Default select example"
            value={parentId}
            onChange={(e) => setParentId(e.currentTarget.value)}
          >
            <option>Select parent category </option>
            {optionCategoryList(categories.categories).map((option) => {
              return <option value={option.value}>{option.name} </option>;
            })}
          </Form.Select>
        </Form>
      </ModalPopUp>
    </div>
  );
};

export default Category;
