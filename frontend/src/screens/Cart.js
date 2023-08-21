import React from "react";
import Layout from "./Layout";
import { Card, Col, Container, Row } from "react-bootstrap";

/**
 * @author
 * @function Cart
 **/

export const Cart = (props) => {
  return (
    <Layout>
      <Container>
        <Row>
          <Col sm={8}>
            <Card border="dark" className="mt-2"> 
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Warning Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
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
