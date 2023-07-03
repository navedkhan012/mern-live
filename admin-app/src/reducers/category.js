import { categoryConstants } from "../actions/constants";

const initinalState = {
  categories: [],
  loading: false,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initinalState, action) => {
  console.log("action", action);
  switch (action.type) {
    case categoryConstants.CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case categoryConstants.CATEGORY_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories,
        loading: false,
      };
      break;
    case categoryConstants.CATEGORY_FAILURE:
      state = {
        ...state,
        categories: action.payload.error,
        loading: false,
      };
      break;

    case categoryConstants.ADD_CATEGORY_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case categoryConstants.ADD_CATEGORY_SUCCESS:
      state = {
        ...state,
        categories: action.payload.category,
        loading: false,
      };
      break;

    case categoryConstants.ADD_CATEGORY_FAILURE:
      state = {
        ...state,
        loading: false,
      };
      break;

    default:
  }

  return state;
};
