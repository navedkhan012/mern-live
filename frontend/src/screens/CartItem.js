import React, { useState } from "react";

/**
 * @author
 * @function CartItem
 **/

const CartItem = (props) => {
  const { _id, name, quantity, price } = props.cartItem;
  const [qty, setQty] = useState(quantity);

  const onPlusIncrement = () => {
    setQty(qty + 1);
    props.onQtyIncrement(_id, quantity);
  };

  const onMinusDecrement = () => {
    setQty(qty - 1);
    props.onQtyIncrement(_id, quantity + 1);
  };
  return (
    <div>
      <div
        style={{
          border: "1px solid red",
          padding: 10,
          borderRadius: 8,
          backgroundColor: "#f5f5f5",
        }}
        className="mb-2"
      >
        <h4>{name}</h4>
        <h5>{quantity}</h5>
        <h5>{price}</h5>
        <div class="col-md-4">
          <div className="qty-container">
            <button
              className="qty-btn-minus btn-light"
              type="button"
              onClick={onMinusDecrement}
            >
              <i class="fa fa-minus"></i>
            </button>
            <input type="text" name="qty" value={qty} className="input-qty" />
            <button
              className="qty-btn-plus btn-light"
              type="button"
              onClick={onPlusIncrement}
            >
              <i class="fa fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
