import { authConstants } from "../constents";

/* eslint-disable import/no-anonymous-default-export */
const initinalState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    profilePicture: "",
  },
};

export default (state = initinalState, action) => {
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
      break;

    // eslint-disable-next-line no-duplicate-case
    case authConstants.LOGIN_FAILURE:
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
