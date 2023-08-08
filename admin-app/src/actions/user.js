import axiosIntance from "../helpers/axios";
import { userConstants } from "./constants";

export const signupAction = (user) => {
  console.log("user", user);
  return async (dispatch) => {
    dispatch({
      type: userConstants.USER_REGISTER_REQUEST,
    });
    const res = await axiosIntance.post("signup", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });

    if (res.status === 200) {
      //   const { token, user } = res.data;
      //   localStorage.setItem("user", JSON.stringify(user));
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: {
          message: "user created succesfully",
        },
      });
    } else {
      dispatch({
        type: userConstants.USER_REGISTER_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
