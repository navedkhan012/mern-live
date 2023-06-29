import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { signupAction } from "../actions/user";

/**
 * @author
 * @function Signin
 **/

export const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  if (auth.token) {
    return <Redirect to="/" />;
  }

  const onSubmitSignup = (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    dispatch(signupAction(user));
  };

  if (user.loading) {
    return <div>loading</div>;
  }
  return (
    <Container>
      <Row className="pt-4">
        <Col xs={3} md={3}>
          sing up
        </Col>
        <Col xs={6} md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Last name">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
            </Form.Group>

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
            <Button variant="primary" type="submit" onClick={onSubmitSignup}>
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
