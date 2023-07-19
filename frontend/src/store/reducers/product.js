import { getProductConstent } from "../constents";

const initialState = {
  products: [],
  loading: false,
  error: null,
  productByPrice: {
    under5k: [],
    under10k: [],
    under15k: [],
    under20k: [],
    under30k: [],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case getProductConstent.GET_ALL_PRODUCT_BY_SLUG_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    // eslint-disable-next-line no-duplicate-case
    case getProductConstent.GET_ALL_PRODUCT_BY_SLUG_SUCCESS:
      state = {
        ...state,
        loading: false,
        products: action.payload.products,
        productByPrice: {
          ...action.payload.productByPrice,
        },
      };
      break;

    default:
      break;
  }
  return state;
};
