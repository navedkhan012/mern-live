import { categoryConstants, productConstants } from "../actions/constants";

const initinalState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    profilePicture: "",
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { products: [] }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case productConstants.GET_PRODUCT_SUCCESS:
      state = {
        ...state,
        products: action.payload.products,
      };
      break;
  }

  return state;
};
