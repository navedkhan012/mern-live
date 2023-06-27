import { authConstants } from "./constants";
import axios from "../helpers/axios";

export const loginAction = (user) => {
  return async (dispatch) => {
    dispatch({
      type: authConstants.LOGIN_REQUEST,
    });
    const res = await axios.post("signin", {
      email: user.email,
      password: user.password,
    });

    if (res.status === 200) {
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
