import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductBySlug } from "../store/actions/product";
import { Col, Card, Button, Row } from "react-bootstrap";
import { getSearchParmasInObject } from "../utils/params";
import { Link } from "react-router-dom";

/**
 * @author
 * @function ProductList
 **/

const ProductList = (props) => {
  // const slug = props.match.params.slug;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductBySlug(props.slug));
  }, [dispatch, props.slug]);

  // console.log(slug);
  return (
    <div>
      {Object.keys(products.productByPrice).map((key, index) => {
        return (
          <div className="container p-2" key={index}>
            <div className="productListWrapper mt-4">
              <div className="d-flex justify-content-between mb-2">
                <h3>
                  {props.slug} samsung mobile {key}
                </h3>
                <Button variant="primary">View All</Button>
              </div>
              <Row>
                {products.productByPrice[key].map((product, index) => {
                  return (
                    <Col sm={3} key={index}>
                      <Card>
                        <Link to={`${product.slug}/${product._id}/p`}>
                          <Card.Img
                            variant="top"
                            src="https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg"
                          />
                        </Link>
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
    </div>
  );
};

export default ProductList;
