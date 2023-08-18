import axiosIntance from "../helpers/axios";
import { pageConstants } from "./constants";

export const createPageAction = (from) => {
  return async (dispatch) => {
    dispatch({
      type: pageConstants.PAGE_REGISTER_REQUEST,
    });
    const result = await axiosIntance.post("page", from);
    if (result.status === 200) {
      dispatch({
        type: pageConstants.PAGE_REGISTER_SUCCESS,
        payload: {
          categories: result.data.page,
        },
      });
    } else {
      dispatch({
        type: pageConstants.PAGE_REGISTER_FAILURE,
        payload: {
          error: result.data.error,
        },
      });
    }
  };
};
