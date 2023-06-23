import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

/**
 * @author
 * @function Signin
 **/

export const Signup = (props) => {
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
                value={"First name"}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Last name">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last name"
                value={"Last name"}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Last name"
                value={"email"}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={"password"}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() => alert("yes working")}
            >
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