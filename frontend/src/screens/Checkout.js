import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../store/actions/useraddress";
import PriceDetail from "../components/PriceDetail";
import { Cart } from "./Cart";
import { createOrder, getOrder } from "../store/actions/order";

/**
 * @author
 * @function Checkout
 **/

const Checkout = (props) => {
  const [selectAddress, setSelectAddress] = useState(null);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const useAddress = useSelector((state) => state.useAddress);

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);
  const confirmOrder = () => {
    const totalAmount = Object.keys(cart.cartItems).reduce(
      (totalPrice, key) => {
        const { price, qty } = cart.cartItems[key];
        return totalPrice + price * qty;
      },
      0
    );

    const items = Object.keys(cart.cartItems).map((key) => ({
      productId: key,
      payablePrice: cart.cartItems[key].price,
      purchasedQty: 1,
    }));
    const payload = {
      addressId: selectAddress._id,
      totalAmount: totalAmount,
      items: items,
      paymentStatus: "pending",
    };
    dispatch(createOrder(payload));
  };
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={8}>
            <div>
              <h3>Login </h3>
              <p>{auth.user.email}</p>
            </div>
            <hr />
            <div>
              <h3>Address </h3>
              {useAddress.payload.address.map((address, i) => (
                <div>
                  <div>
                    <input
                      type="radio"
                      id={i}
                      name="address"
                      value={address.address}
                      onClick={() => setSelectAddress(address)}
                    />
                    <label for={i}>
                      {address.address} {address.name} {address.mobileNumber}
                    </label>
                  </div>
                  {/* <input
                    type="radio"
                    name="address"
                    value={address.address}
                    onClick={() => setSelectAddress(address)}
                  /> */}
                  {/* <h6 key={i}>{address.address}</h6> */}
                  <button className="btn btn-primary">Devlivery here</button>
                </div>
              ))}
            </div>
            <hr />
            <div>
              <h3>Order summary </h3>
              <Cart onlyCartItems={true} />
            </div>
            <hr />
            <div>
              <h3>payment details </h3>
              <Form.Check
                label="cash on delivery"
                name="payment-mode"
                type={"radio"}
                id={111}
              />
              <Form.Check
                label="online"
                name="payment-mode"
                type={"radio"}
                id={222}
              />
              <Button onClick={confirmOrder}>Make payment</Button>
            </div>
          </Col>
          <Col sm={4}>
            <PriceDetail
              totalItems={Object.keys(cart.cartItems).reduce((qty, key) => {
                return qty + cart.cartItems[key].qty;
              }, 0)}
              totalPrice={Object.keys(cart.cartItems).reduce(
                (totalPrice, key) => {
                  const { price, qty } = cart.cartItems[key];
                  return totalPrice + price * qty;
                },
                0
              )}
            />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Checkout;
