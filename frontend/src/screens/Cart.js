import React from "react";
import Layout from "./Layout";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

/**
 * @author
 * @function Cart
 **/

export const Cart = (props) => {
  const cart = useSelector((state) => state.cart);

  console.log("cart", Object.keys(cart.cartItems));
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={8}>
            <Card border="dark" className="mt-2">
              <Card.Header>Cart</Card.Header>
              <Card.Body>
                <Card.Title>Cart information</Card.Title>
                <Card.Text>
                  {/* {JSON.stringify(cart.cartItems)} */}
                  {/* Some quick example text to build on the card title and make up
                  the bulk of the card's content. */}
                  {Object.keys(cart.cartItems).map((key, index) => (
                    <div
                      style={{
                        border: "1px solid red",
                        padding: 10,
                        borderRadius: 8,
                        backgroundColor: "#f5f5f5",
                      }}
                      className="mb-2"
                    >
                      <h4 key={index}>{cart.cartItems[key].name}</h4>
                      <h5 key={index}>{cart.cartItems[key].quantity}</h5>
                      <h5 key={index}>{cart.cartItems[key].price}</h5>
                    </div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>detail</Col>
        </Row>
      </Container>
    </Layout>
  );
};
