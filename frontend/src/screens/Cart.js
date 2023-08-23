// start 34
import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import CartItem from "./CartItem";
import { addToCart } from "../store/actions/cart";

/**
 * @author
 * @function Cart
 **/

export const Cart = (props) => {
  const cart = useSelector((state) => state.cart);
  // const cartItems = cart.cartItems;
  const [cartItems, setCartItems] = useState(cart.cartItems);
  const dispatch = useDispatch();
  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

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
                  {/* {JSON.stringify(cart.cartItems)} */}
                  {/* Some quick example text to build on the card title and make up
                  the bulk of the card's content. */}
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
            </Card>
          </Col>
          <Col sm={4}>detail</Col>
        </Row>
      </Container>
    </Layout>
  );
};
