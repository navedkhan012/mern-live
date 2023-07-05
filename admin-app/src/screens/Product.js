import React, { useState } from "react";
import { Layout } from "./Layout";
import { Button, Form } from "react-bootstrap";
import ModalPopUp from "../components/ModalPopUp";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../actions/product";
/**
 * @author
 * @function Product
 **/

const Product = (props) => {
  const [show, setShow] = useState(false);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [desciption, setDesciption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [productPictures, setProductPictures] = useState("");
  const [categoryId, setCategoryid] = useState("");
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  console.log("products", products);
  const handleChangeImage = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
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

  const handleCategorySave = () => {
    const form = new FormData();
    form.append("name", productName);
    form.append("category", categoryId);
    form.append("desciption", desciption);
    form.append("price", price);
    form.append("quantity", quantity);
    // form.append("productPictures", productPictures);

    for (const picture of productPictures) {
      form.append("productPictures", picture);
    }

    dispatch(addProduct(form));
    setShow(false);
  };
  return (
    <Layout sidebar>
      <div>Product</div>

      <Button variant="primary" onClick={() => setShow(true)}>
        Add Category
      </Button>

      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#id</th>
              <th scope="col">name</th>
              <th scope="col">price</th>
              <th scope="col">qut</th>
              <th scope="col">desciption</th>
              <th scope="col">category</th>
            </tr>
          </thead>
          <tbody>
            {products.products.map((product, index) => {
              return (
                <tr>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.desciption}</td>
                  <td>{product.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ModalPopUp
        heading="Add Product"
        handleShow={show}
        handleClose={() => setShow(false)}
        handleSave={handleCategorySave}
      >
        <Form>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>product name</Form.Label>
            <Form.Control
              type="text"
              placeholder="product name"
              value={productName}
              onChange={(e) => setProductName(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>price</Form.Label>
            <Form.Control
              type="text"
              placeholder="price"
              value={price}
              onChange={(e) => setPrice(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>desciption</Form.Label>
            <Form.Control
              type="text"
              placeholder="desciption"
              value={desciption}
              onChange={(e) => setDesciption(e.currentTarget.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>quantity</Form.Label>
            <Form.Control
              type="text"
              placeholder="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.currentTarget.value)}
            />
          </Form.Group>

          <Form.Select
            aria-label="Default select example"
            value={categoryId}
            onChange={(e) => setCategoryid(e.currentTarget.value)}
          >
            <option>Select parent category </option>
            {categories.categories.length > 0
              ? optionCategoryList(categories.categories).map(
                  (option, index) => {
                    return (
                      <option key={index} value={option.value}>
                        {option.name}{" "}
                      </option>
                    );
                  }
                )
              : "reload"}
          </Form.Select>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Category image</Form.Label>
            <Form.Control type="file" onChange={handleChangeImage} />
            <div className="pt-2">
              {productPictures.length > 0
                ? productPictures.map((image, index) => (
                    <div key={index}>{image.name}</div>
                  ))
                : "No Image selected"}
            </div>
          </Form.Group>
        </Form>
      </ModalPopUp>
    </Layout>
  );
};

export default Product;
