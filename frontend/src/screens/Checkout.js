import React, { useEffect, useState } from "react";
import Layout from "./Layout";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../store/actions/useraddress";
import PriceDetail from "../components/PriceDetail";
import { Cart } from "./Cart";

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
  console.log("selectAddress", selectAddress);
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
                      <label for={i}>{address.address}</label>
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
