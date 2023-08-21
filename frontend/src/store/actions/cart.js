import store from "..";
import { cartConstants } from "../constents";

export const addToCart = (product) => {
  return async (dispatch) => {
    const { cartItems } = store.getState().cart;

    const quantity = cartItems[product._id]
      ? parseInt(cartItems[product._id].quantity + 1)
      : 1;

    cartItems[product._id] = {
      ...product,
      quantity,
    };

    localStorage.setItem("cart", JSON.stringify(cartItems));

    dispatch({
      type: cartConstants.ADD_TO_CART_SUCCESS,
      payload: {
        cartItems,
      },
    });
  };
};

export const updateCart = () => {
  return async (dispatch) => {
    const cartItems = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : null;
    // console.log("cart----------->", Object.keys(cart).length > 0);
    if (Object.keys(cartItems).length > 0) {
      dispatch({
        type: cartConstants.ADD_TO_CART_SUCCESS,
        payload: {
          cartItems,
        },
      });
    } else {
      localStorage.clear();
    }
  };
};
