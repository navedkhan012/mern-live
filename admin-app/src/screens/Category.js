// 23 mint 16 video
import React, { useState } from "react";
import { Layout } from "./Layout";
import { useSelector, useDispatch } from "react-redux";
import {
  addCategory,
  deleteCategoriesAction,
  getAllCategories,
  updateCategories,
} from "../actions/category";
import ModalPopUp from "../components/ModalPopUp";
import { Button, Col, Form, Row } from "react-bootstrap";
import CheckboxTree from "react-checkbox-tree";

import "react-checkbox-tree/lib/react-checkbox-tree.css";

/**
 * @author
 * @function Category
 **/

const Category = (props) => {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  const [checkedArray, setCheckedArray] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);
  // const [updateCategory, setUpdateCategory] = useState(false);
  // const [checkedUpdatedArray, setCheckedUpdatedArray] = useState([]);
  // const [expandedUpdatedArray, setExpandedUpdatedArray] = useState([]);

  const [show, setShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [parentId, setParentId] = useState("");
  const [categoryImage, setCategoryImage] = useState({});
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  const renderCategoryList = (categories) => {
    const categoriesArr = [];
    for (const cat of categories) {
      categoriesArr.push({
        label: cat.name,
        value: cat._id,
        children: cat.children.length > 0 && renderCategoryList(cat.children),
      });
    }
    return categoriesArr;
  };

  const optionCategoryList = (categories, options = []) => {
    for (const cat of categories) {
      options.push({
        value: cat._id,
        name: cat.name,
        parentId: cat.parentId,
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
    dispatch(addCategory(form));
    setShow(false);
  };

  const renderAddCategoryModal = () => {
    return (
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
            {categories.categories.length > 0
              ? optionCategoryList(categories.categories).map((option) => {
                  return <option value={option.value}>{option.name} </option>;
                })
              : "reload"}
          </Form.Select>
        </Form>
      </ModalPopUp>
    );
  };

  const handleCategoryInput = (key, value, index, type) => {
    if (type === "checked") {
      // checkedArray[index] = { ...checkedArray[index], [key]: value };
      const updateCheckedArray = checkedArray.map((item, _index) =>
        index === _index ? { ...item, [key]: value } : item
      );
      setCheckedArray(updateCheckedArray);
    } else if (type === "expanded") {
      const updateExpandedArray = expandedArray.map((item, _index) =>
        index === _index ? { ...item, [key]: value } : item
      );
      setExpandedArray(updateExpandedArray);
    }
  };
  const handleUpdateCategory = () => {
    setEditModal(false);
    const form = new FormData();
    expandedArray.forEach((item, index) => {
      form.append("_id", item.value);
      form.append("name", item.name);
      form.append("parentId", item.parentId ? item.parentId : "");
      form.append("type", item.type);
    });
    checkedArray.forEach((item, index) => {
      form.append("_id", item.value);
      form.append("name", item.name);
      form.append("parentId", item.parentId ? item.parentId : "");
      form.append("type", item.type);
    });
    dispatch(updateCategories(form));
  };
  const renderEditCategoryModal = () => {
    return (
      <ModalPopUp
        heading="Add category"
        handleShow={editModal}
        handleClose={() => setEditModal(false)}
        handleSave={handleUpdateCategory}
        size="lg"
      >
        <Row>
          <Col>
            <h5>Expanded</h5>
          </Col>
        </Row>

        {expandedArray.length > 0 &&
          expandedArray.map((item, index) => {
            console.log("item", item);
            return (
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Category name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="category name"
                      value={item.name}
                      onChange={(e) =>
                        handleCategoryInput(
                          "name",
                          e.currentTarget.value,
                          index,
                          "expanded"
                        )
                      }
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label>select category</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={item.parentId}
                    onChange={(e) =>
                      handleCategoryInput(
                        "parentId",
                        e.currentTarget.value,
                        index,
                        "expanded"
                      )
                    }
                  >
                    <option>Select parent category </option>
                    {categories.categories.length > 0
                      ? optionCategoryList(categories.categories).map(
                          (option) => {
                            return (
                              <option value={option.value}>
                                {option.name}{" "}
                              </option>
                            );
                          }
                        )
                      : "reload"}
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>select type</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={parentId}
                    onChange={(e) => setParentId(e.currentTarget.value)}
                  >
                    <option>Select parent category </option>
                    <option value="store">Store </option>
                    <option value="product">Product </option>
                    <option value="page">Page </option>
                  </Form.Select>
                </Col>
              </Row>
            );
          })}
        <Row>
          <Col>
            <h5>checkedArray</h5>
          </Col>
        </Row>

        {checkedArray.length > 0 &&
          checkedArray.map((item, index) => {
            console.log("checkedArray", item);
            return (
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Category name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="category name"
                      value={item.name}
                      onChange={(e) =>
                        handleCategoryInput(
                          "name",
                          e.currentTarget.value,
                          index,
                          "checked"
                        )
                      }
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label>select category</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={item.parentId}
                    onChange={(e) =>
                      handleCategoryInput(
                        "parentId",
                        e.currentTarget.value,
                        index,
                        "checked"
                      )
                    }
                  >
                    <option>Select parent category </option>
                    {categories.categories.length > 0
                      ? optionCategoryList(categories.categories).map(
                          (option) => {
                            return (
                              <option value={option.value}>
                                {option.name}{" "}
                              </option>
                            );
                          }
                        )
                      : "reload"}
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Label>select type</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    value={parentId}
                    onChange={(e) => setParentId(e.currentTarget.value)}
                  >
                    <option>Select parent category </option>
                    <option value="store">Store </option>
                    <option value="product">Product </option>
                    <option value="page">Page </option>
                  </Form.Select>
                </Col>
              </Row>
            );
          })}
      </ModalPopUp>
    );
  };

  const deleteCategory = () => {
    updateCheckedAndExpandedCategories();
    setDeleteModal(true);
  };

  const deleteCategories = () => {
    const checkedIdsArray = checked.length > 0 ? checked : [];
    const expandedIdsArray = expanded.length > 0 ? expanded : [];
    const idsArray = expandedIdsArray.concat(checkedIdsArray);
    dispatch(deleteCategoriesAction(idsArray)).then((result) => {
      if (result) {
        dispatch(getAllCategories());
      }
    });
    setDeleteModal(false);
  };

  const renderDeleteCategoryModal = () => {
    return (
      <ModalPopUp
        heading="Category delete confirmation"
        handleShow={deleteModal}
        handleClose={() => setDeleteModal(false)}
        handleSave={deleteCategories}
        size="lg"
        closeText="No"
        saveText="Yes"
      >
        <Row>
          <Col>
            <h5>Do you want to delete this categy</h5>
            <h6>Checked</h6>
            {checkedArray.map((item, index) => {
              return <h5>{item.name}</h5>;
            })}
            <h6>Expanded</h6>
            {expandedArray.map((item, index) => {
              return <h5>{item.name}</h5>;
            })}
          </Col>
        </Row>
      </ModalPopUp>
    );
  };
  const handleEditCategory = () => {
    setEditModal(true);
    updateCheckedAndExpandedCategories();
  };

  const updateCheckedAndExpandedCategories = () => {
    const categoriesList = optionCategoryList(categories.categories);
    const checkedArray = [];
    const expandedArray = [];
    checked.length > 0 &&
      checked.forEach((categoryId, index) => {
        const category = categoriesList.find(
          (category, _index) => categoryId == category.value
        );
        category && checkedArray.push(category);
      });

    expanded.length > 0 &&
      expanded.forEach((categoryId, index) => {
        const category = categoriesList.find(
          (category, _index) => categoryId == category.value
        );
        category && expandedArray.push(category);
      });

    setCheckedArray(checkedArray);
    setExpandedArray(expandedArray);
  };

  return (
    <div>
      <Layout sidebar>
        <Button variant="primary" onClick={() => setShow(true)}>
          Add Category
        </Button>
        <h2>Category</h2>
        <div className="table-responsive small">
          {/* <ul>
            {categories.categories.length > 0
              ? renderCategoryList(categories.categories)
              : "reload"}
          </ul> */}

          <CheckboxTree
            nodes={renderCategoryList(categories.categories)}
            checked={checked}
            expanded={expanded}
            onCheck={(checked) => setChecked(checked)}
            onExpand={(expanded) => setExpanded(expanded)}
          />
          <Button variant="outline-danger" onClick={deleteCategory}>
            Delete
          </Button>
          <Button variant="outline-primary" onClick={handleEditCategory}>
            Edit
          </Button>
        </div>
      </Layout>

      {renderAddCategoryModal()}
      {renderEditCategoryModal()}
      {renderDeleteCategoryModal()}
    </div>
  );
};

export default Category;
