import { getProductConstent, pageProductConstent } from "../constents";
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

export const getProductPage = (payload) => {
  return async (dispatch) => {
    const { cid, type } = payload;
    dispatch({
      type: pageProductConstent.PAGE_PRODUCT_REQUEST,
    });

    const res = await axiosIntance.get(`/page/${cid}/${type}`);
    if (res.status === 200) {
      dispatch({
        type: pageProductConstent.PAGE_PRODUCT_SUCCESS,
        payload: res.data,
      });
    } else {
      dispatch({
        type: pageProductConstent.PAGE_PRODUCT_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};

export const getProductDetailById = (productId) => {
  return async (dispatch) => {
    dispatch({
      type: getProductConstent.GET_ALL_PRODUCT_DETAIL_BY_ID_REQUEST,
    });

    const res = await axiosIntance.get(`/product/${productId}`);
    if (res.status === 200) {
      dispatch({
        type: getProductConstent.GET_ALL_PRODUCT_DETAIL_BY_ID_SUCCESS,
        payload: {
          productDetail: res.data.product,
        },
      });
    } else {
      dispatch({
        type: getProductConstent.GET_ALL_PRODUCT_DETAIL_BY_ID_FAILURE,
        payload: { error: res.data.error },
      });
    }
  };
};
