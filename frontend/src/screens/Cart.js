// start 34
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import CartItem from "./CartItem";
import { addToCart, getCartItems } from "../store/actions/cart";

/**
 * @author
 * @function Cart
 **/

export const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (auth.athenticate) {
      dispatch(getCartItems());
    }
  }, [auth, dispatch]);

  const onQtyIncrement = (id, qty) => {
    const { _id, name, price, img } = cartItems[id];
    dispatch(addToCart({ _id, name, price, img }, 1));
    // console.log({ id, qty });
  };
  const onQtyDecrement = (id, qty) => {
    const { _id, name, price, img } = cartItems[id];
    dispatch(addToCart({ _id, name, price, img }, -1));
  };
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
                  {Object.keys(cartItems).length === 0 && (
                    <div>Add sonthing in cart</div>
                  )}
                  {Object.keys(cartItems).map((key, index) => (
                    <CartItem
                      index={index}
                      cartItem={cartItems[key]}
                      onQtyIncrement={onQtyIncrement}
                      onQtyDecrement={onQtyDecrement}
                    />
                  ))}
                </Card.Text>
              </Card.Body>
              {Object.keys(cartItems).length !== 0 && (
                <Col className="d-flex justify-content-end p-4">
                  <Button
                    size="lg"
                    onClick={() => props.history.push("checkout")}
                  >
                    Place order
                  </Button>
                </Col>
              )}
            </Card>
          </Col>
          <Col sm={4}>detail</Col>
        </Row>
      </Container>
    </Layout>
  );
};
