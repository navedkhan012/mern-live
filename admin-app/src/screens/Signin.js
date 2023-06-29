// half 11
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { loginAction } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
/**
 * @author
 * @function Signin
 **/

export const Signin = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(loginAction(user));
  };

  if (auth.token) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Row className="pt-4">
        <Col xs={3} md={3}>
          sing up
        </Col>
        <Col xs={6} md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Last name"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={userLogin}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col xs={3} md={3}>
          Third, but first
        </Col>
      </Row>
    </Container>
  );
};
