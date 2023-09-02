import { orderConstants } from "../constents";
import axiosIntance from "./axiosIntance";

export const createOrder = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: orderConstants.CREATE_ORDER_REQUEST });
      const res = await axiosIntance.post(`/addorder`, payload);
      console.log("res createOrder", res);
      if (res.status === 201) {
        const { order } = res.data;

        if (order) {
          dispatch({
            type: orderConstants.CREATE_ORDER_SUCCESS,
            payload: { order },
          });
        }
      }
    } catch (error) {
      dispatch({
        type: orderConstants.CREATE_ORDER_FAILURE,
        payload: { error },
      });
      console.log(error);
    }
  };
};

export const getOrder = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: orderConstants.GET_ADDRESS_REQUEST });
      const res = await axiosIntance.get(`/getorder`);
      if (res.status === 200) {
        const { orders } = res.data;

        if (orders) {
          dispatch({
            type: orderConstants.GET_ADDRESS_SUCCESS,
            payload: { orders },
          });
        }
      }
    } catch (error) {
      dispatch({
        type: orderConstants.GET_ADDRESS_FAILURE,
        payload: { error },
      });
      console.log(error);
    }
  };
};
