import axiosIntance from "../helpers/axios";
import { categoryConstants } from "./constants";

export const getAllCategories = () => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.CATEGORY_REQUEST,
    });
    const result = await axiosIntance.get("getcategories");
    if (result.status === 200) {
      dispatch({
        type: categoryConstants.CATEGORY_SUCCESS,
        payload: {
          categories: result.data.categoroyList,
        },
      });
    } else {
      dispatch({
        type: categoryConstants.CATEGORY_FAILURE,
        payload: {
          error: result.data.error,
        },
      });
    }
  };
};

export const addCategory = (form) => {
  return async (dispatch) => {
    dispatch({
      type: categoryConstants.ADD_CATEGORY_REQUEST,
    });
    const res = await axiosIntance.post("category/create", form);

    if (res.status === 201) {
      dispatch({
        type: categoryConstants.ADD_CATEGORY_SUCCESS,
        payload: {
          category: res.data.category,
        },
      });
    } else {
      dispatch({
        type: categoryConstants.ADD_CATEGORY_FAILURE,
        payload: res.data.error,
      });
    }
  };
};

export const updateCategories = (form) => {
  return async (dispatch) => {
    const res = await axiosIntance.post("category/update", form);
    if (res.status === 201) {
      return true;
    } else {
      return false;
    }
  };
};

export const deleteCategoriesAction = (ids) => {
  return async (dispatch) => {
    const res = await axiosIntance.post("category/delete", {
      payload: {
        ids,
      },
    });
    console.log("deleteCategories res", res);
  };
};
