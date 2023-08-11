/* eslint-disable default-case */
import { pageConstants } from "../actions/constants";

const initinalState = {
  title: "",
  description: "",
  products: [],
  banners: [],
  category: "",
  createdBy: "",
  loading: false,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initinalState, action) => {
  switch (action.type) {
    case pageConstants.PAGE_REGISTER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case pageConstants.PAGE_REGISTER_SUCCESS:
      state = {
        ...state,
        loading: false,
        page: action.payload.page,
      };
      break;
    case pageConstants.PAGE_REGISTER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
  }
  return state;
};
