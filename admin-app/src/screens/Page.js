import React, { useEffect, useState } from "react";
import { Layout } from "./Layout";
import ModalPopUp from "../components/ModalPopUp";
import { Col, Form, Row } from "react-bootstrap";
import { optionCategoryList } from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { createPageAction } from "../actions/page";

/**
 * @author
 * @function Page
 **/

const Page = (props) => {
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const [bannerImage, setBannerImage] = useState([]);
  const [productImage, setProductImage] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [createModal, setCreateModal] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    setCategoryList(optionCategoryList(categories.categories));
  }, [categories]);

  const handleChangeProductImage = (e) => {
    setProductImage([...productImage, e.target.files[0]]);
  };
  const handleChangeBannerImage = (e) => {
    setBannerImage([...bannerImage, e.target.files[0]]);
  };
  const onPageSubmit = () => {
    if (pageTitle === "") {
      alert("Page title is required");
      return;
    }
    const form = new FormData();
    form.append("title", pageTitle);
    form.append("description", pageDescription);
    form.append("category", selectedCategory);
    form.append("type", "page"); // will add by category
    productImage.map((pic) => {
      form.append("products", pic);
    });
    bannerImage.map((pic) => {
      form.append("banners", pic);
    });
    // form.append("products", productImage);
    // form.append("banners", bannerImage);

    dispatch(createPageAction(form));
    // console.log("form", form);
    // alert("page created");
    // console.log("from->>>>>>>>>>>", {
    //   pageTitle,
    //   pageDescription,
    //   productImage,
    //   bannerImage,
    //   selectedCategory,
    // });
    setCreateModal(false);
  };
  const renderCreatePageModal = () => {
    return (
      <ModalPopUp
        heading="Category delete confirmation"
        handleShow={createModal}
        handleClose={() => setCreateModal(false)}
        handleSave={onPageSubmit}
        size="lg"
        closeText="No"
        saveText="Yes"
      >
        <Row>
          <Col>
            <Col>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Category name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="category name"
                  value={pageTitle}
                  onChange={(e) => setPageTitle(e.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Category name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="description name"
                  value={pageDescription}
                  onChange={(e) => setPageDescription(e.currentTarget.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.currentTarget.value)}
                >
                  <option>Select parent category </option>
                  {categories.categories.length > 0
                    ? categoryList.map((option) => {
                        return (
                          <option value={option.value}>{option.name} </option>
                        );
                      })
                    : "reload"}
                </Form.Select>
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>product image</Form.Label>
                <Form.Control type="file" onChange={handleChangeProductImage} />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>banner image</Form.Label>
                <Form.Control type="file" onChange={handleChangeBannerImage} />
              </Form.Group>
            </Col>
          </Col>
        </Row>
      </ModalPopUp>
    );
  };

  // console.log("productImage", productImage);
  return (
    <Layout sidebar>
      Mobile Page will show here
      <button onClick={() => setCreateModal(true)}>create page</button>
      {renderCreatePageModal()}
    </Layout>
  );
};

export default Page;
