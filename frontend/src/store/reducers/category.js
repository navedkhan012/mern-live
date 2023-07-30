/* eslint-disable import/no-anonymous-default-export */
import { getCategoryConstent } from "../constents";

const initState = {
  categoroyList: [],
};

export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case getCategoryConstent.GET_ALL_CATEGORY_REQUEST:
      state = {
        ...state,
      };
      break;
    case getCategoryConstent.GET_ALL_CATEGORY_SUCCESS:
      state = {
        ...state,
        categoroyList: action.payload.categoryList,
      };
      break;

    case getCategoryConstent.GET_ALL_CATEGORY_FAILURE:
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
