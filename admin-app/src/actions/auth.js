import { authConstants } from "./constants";

export const loginAction = (user) => {
  return (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
      payload: {
        ...user,
      },
    });
  };
};
