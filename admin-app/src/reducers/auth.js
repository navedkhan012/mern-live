/* eslint-disable default-case */
import { authConstants } from "../actions/constants";

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
export default (state = initinalState, action) => {
  // console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_REQUEST:
      state = {
        ...state,
        ...action.payload,
      };
      break;
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
      break;
    case authConstants.LOGOUT_REQUEST:
      state = {
        ...initinalState,
      };
      break;
    case authConstants.LOGOUT_SUCCESS:
      state = {
        ...initinalState,
      };
      break;
    case authConstants.LOGOUT_FAILURE:
      state = {
        ...initinalState,
        error: action.payload.error,
      };
      break;
  }

  return state;
};
