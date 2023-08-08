import axiosIntance from "../helpers/axios";
import { categoryConstants, productConstants } from "./constants";

export const getInitialData = () => {
  return async (dispatch) => {
    const res = await axiosIntance.get("initialdata");
    const { categories, products } = res.data;
    if (res.status === 200) {
      dispatch({
        type: categoryConstants.CATEGORY_SUCCESS,
        payload: { categories },
      });
      dispatch({
        type: productConstants.GET_PRODUCT_SUCCESS,
        payload: { products },
      });
    } else {
      dispatch({
        type: productConstants.GET_PRODUCT_FAILURE,
        payload: res.data.error,
      });
    }
  };
};
