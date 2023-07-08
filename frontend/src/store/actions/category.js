import { getCategoryConstent } from "../constents";
import axiosIntance from "./axiosIntance";

export const getallcategory = () => {
  return async (dispatch) => {
    dispatch({
      type: getCategoryConstent.GET_ALL_CATEGORY_REQUEST,
    });
    const res = await axiosIntance.get("getcategories");
    if (res.status === 200) {
      dispatch({
        type: getCategoryConstent.GET_ALL_CATEGORY_SUCCESS,
        payload: { categoryList: res.data.categoroyList },
      });
    } else {
      dispatch({
        type: getCategoryConstent.GET_ALL_CATEGORY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
