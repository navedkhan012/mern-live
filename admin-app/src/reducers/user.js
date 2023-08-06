import { userConstants } from "../actions/constants";

const initinalState = {
  error: null,
  message: "",
  loading: false,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initinalState, action) => {
  switch (action.type) {
    case userConstants.USER_REGISTER_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.USER_REGISTER_SUCCESS:
      state = {
        ...state,
        message: action.payload.message,
        loading: false,
      };
      break;
    case userConstants.USER_REGISTER_FAILURE:
      state = {
        ...state,
        message: action.payload.message,
        loading: false,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};
