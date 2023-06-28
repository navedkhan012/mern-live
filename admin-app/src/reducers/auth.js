/* eslint-disable default-case */
import { authConstants } from "../actions/constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = {
    token: null,
    user: {
      firstName: "",
      lastName: "",
      email: "",
      profilePicture: "",
    },
  },
  action
) => {
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
  }

  return state;
};
