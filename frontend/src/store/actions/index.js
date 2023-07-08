import { getCategoryConstent } from "../constents";
import axiosIntance from "./axiosIntance";
export const getallcategory = () => {
  return async (dispatch) => {
    dispatch({
      type: getCategoryConstent.GET_ALL_CATEGORY_REQUEST,
    });
    const res = await axiosIntance.get(`category/getcategory`);

    console.log(res);

    if (res.status === 200) {
      const { categoryList } = res.data;
      dispatch({
        type: getCategoryConstent.GET_ALL_CATEGORY_SUCCESS,
        payload: { categories: categoryList },
      });
    } else {
      dispatch({
        type: getCategoryConstent.GET_ALL_CATEGORY_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
