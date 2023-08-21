/* eslint-disable no-duplicate-case */
/* eslint-disable import/no-anonymous-default-export */
import { cartConstants } from "../constents";

const initialState = {
  cartItems: {
    // 123: {
    //   _id: 23,
    //   name: "sum",
    //   img: "",
    //   price: 2000,
    //   qty: 1,
    // },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART_REQUEST:
      state = {
        ...state,
      };
      break;
    case cartConstants.ADD_TO_CART_SUCCESS:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
      };
      break;
    case cartConstants.ADD_TO_CART_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    default:
      break;
  }
  return state;
};
