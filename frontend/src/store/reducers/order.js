/* eslint-disable import/no-anonymous-default-export */
import { orderConstants } from "../constents";

const initState = {
  orders: {
    _id: "",
    items: [],
    paymentStatus: "",
  },
  loading: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case orderConstants.GET_ORDER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case orderConstants.GET_ORDER_SUCCESS:
      state = {
        ...state,
        orders: action.payload,
        loading: false,
      };
      break;

    case orderConstants.GET_ORDER_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
      };
      break;

    default:
      state = { state };
      break;
  }
  return state;
};
