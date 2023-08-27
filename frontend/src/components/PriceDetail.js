import React from "react";
import { ListGroup } from "react-bootstrap";

/**
 * @author
 * @function PriceDetail
 **/

const PriceDetail = (props) => {
  return (
    <div>
      <h5>Price Detail</h5>
      <ListGroup>
        <ListGroup.Item>Price ({props.totalItems} items) 4000</ListGroup.Item>
        <ListGroup.Item>Deleivery charge Free</ListGroup.Item>
        <ListGroup.Item>Total Amount {props.totalPrice}</ListGroup.Item>
      </ListGroup>
    </div>
  );
};
export default PriceDetail;
