import { getProductConstent } from "../constents";
import axiosIntance from "./axiosIntance";

export const getProductBySlug = (slug) => {
  return async (dispatch) => {
    dispatch({
      type: getProductConstent.GET_ALL_PRODUCT_BY_SLUG_REQUEST,
    });
    const res = await axiosIntance.get(`/products/${slug}`);
    if (res.status === 200) {
      dispatch({
        type: getProductConstent.GET_ALL_PRODUCT_BY_SLUG_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: getProductConstent.GET_ALL_PRODUCT_BY_SLUG_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
