import React, { useEffect } from "react";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailById } from "../store/actions/product";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { addToCart } from "../store/actions/cart";

/**
 * @author
 * @function ProductDetail
 **/

const ProductDetail = (props) => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);

  const productId = props.match.params.productId;
  console.log("productDetail", productDetail);
  useEffect(() => {
    if (productId) {
      dispatch(getProductDetailById(productId));
    }
  }, [dispatch, productId, props.match.params.productId]);

  const onSubmitCart = () => {
    const { _id, name, price, img, quantity } = productDetail;
    dispatch(addToCart({ _id, name, price, img, quantity }));
    props.history.push("/cart");
  };
  return (
    <Layout>
      <Container>
        <Row>
          <Col xs={3}>
            <Image
              src="https://marketplace.canva.com/EAFHiC1V4LY/1/0/1600w/canva-yellow-modern-coming-soon-instagram-post-8jNLSbtPTIc.jpg"
              thumbnail
            />
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" onClick={onSubmitCart}>
                Add to cart
              </Button>
              <Button variant="secondary" size="lg">
                BUY Now
              </Button>
            </div>
          </Col>
          <Col xs={9}>
            2 of 2{JSON.stringify(productDetail)}
            <h2>{productDetail.name}</h2>
            <h5>{productDetail.desciption}</h5>
            <h2>₹ {productDetail.price}</h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductDetail;
