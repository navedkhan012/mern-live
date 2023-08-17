/* eslint-disable no-duplicate-case */
/* eslint-disable import/no-anonymous-default-export */
import { pageProductConstent } from "../constents";

const initialState = {
  page: {},
  loading: false,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case pageProductConstent.PAGE_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case pageProductConstent.PAGE_PRODUCT_SUCCESS:
      state = {
        ...state,
        page: action.payload.page,
        loading: false,
      };
      break;
    case pageProductConstent.PAGE_PRODUCT_FAILURE:
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
