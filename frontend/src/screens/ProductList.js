import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../store/actions/product";
import { Col, Card, Button, Row } from "react-bootstrap";
/**
 * @author
 * @function ProductList
 **/

const ProductList = (props) => {
  const slug = props.match.params.slug;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductBySlug(slug));
  }, [dispatch, slug]);
  return (
    <Layout>
      {Object.keys(products.productByPrice).map((key, index) => {
        // console.log("key", key);
        return (
          <div className="container p-2" key={index}>
            <div className="productListWrapper mt-4">
              <div className="d-flex justify-content-between mb-2">
                <h3>
                  {slug} samsung mobile {key}
                </h3>
                <Button variant="primary">View All</Button>
              </div>
              <Row>
                {products.productByPrice[key].map((product, index) => {
                  //   console.log("product", product);
                  return (
                    <Col sm={3} key={index}>
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg"
                        />
                        <Card.Body>
                          <Card.Title>{product.name}</Card.Title>
                          <Card.Title>Price {product.price}</Card.Title>
                          <Card.Title>rating 4.5</Card.Title>
                          {/* <Card.Text>{product.desciption}</Card.Text> */}
                          <Button variant="primary">ADD TO CART</Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default ProductList;
