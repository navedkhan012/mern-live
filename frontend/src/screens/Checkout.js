import React, { useEffect } from "react";
import Layout from "./Layout";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../store/actions/useraddress";

/**
 * @author
 * @function Checkout
 **/

const Checkout = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const useAddress = useSelector((state) => state.useAddress);

  useEffect(() => {
    dispatch(getAddress());
  }, [dispatch]);

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
                <h6 key={i}>{address.address}</h6>
              ))}
            </div>
            <hr />
            <div>
              <h3>payment details </h3>
            </div>
          </Col>
          <Col sm={4}>detail</Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Checkout;
