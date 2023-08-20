/* eslint-disable no-duplicate-case */
/* eslint-disable import/no-anonymous-default-export */
import { getProductConstent } from "../constents";

const initialState = {
  name: "",
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case getProductConstent.GET_ALL_PRODUCT_DETAIL_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case getProductConstent.GET_ALL_PRODUCT_DETAIL_BY_ID_SUCCESS:
      state = {
        ...state,
        ...action.payload.productDetail,
        loading: false,
      };
      break;
    case getProductConstent.GET_ALL_PRODUCT_DETAIL_BY_ID_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;

    default:
      break;
  }
  return state;
};
