import axiosIntance from "../helpers/axios";
import { productConstants } from "./constants";

export const addProduct = (form) => {
  console.log("form", form);
  return async (dispatch) => {
    dispatch({
      type: productConstants.ADD_PRODUCT_REQUEST,
    });
    const res = await axiosIntance.post("product/create", form);
    if (res.status === 201) {
      dispatch({
        type: productConstants.ADD_PRODUCT_SUCCESS,
        payload: res.data.products,
      });
    } else {
      dispatch({
        type: productConstants.ADD_PRODUCT_FAILURE,
        payload: res.data.error,
      });
    }
  };
};
