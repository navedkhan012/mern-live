/* eslint-disable import/no-anonymous-default-export */
import { getCategoryConstent } from "../constents";
export default (state = [], action) => {
  switch (action.type) {
    case getCategoryConstent.GET_ALL_CATEGORY_REQUEST:
      state = {
        ...state,
      };
      break;
    case getCategoryConstent.GET_ALL_CATEGORY_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
      };
      break;

    case getCategoryConstent.GET_ALL_CATEGORY_FAILURE:
      state = {
        ...state,
        categories: action.payload.error,
      };
      break;

    default:
      break;
  }
  return state;
};
