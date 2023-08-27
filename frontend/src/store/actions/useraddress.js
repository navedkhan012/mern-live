import { userConstants } from "../constents";
import axiosIntance from "./axiosIntance";

export const getAddress = () => {
  return async (dispatch) => {
    dispatch({
      type: userConstants.GET_USER_ADDRESS_REQUEST,
    });
    const res = await axiosIntance.get("address/getaddress");
    dispatch({
      type: userConstants.GET_USER_ADDRESS_SUCCESS,
      payload: res.data.userAddress.address,
    });

    dispatch({
      type: userConstants.GET_USER_ADDRESS_FAILURE,
      payload: {
        error: res.data.error,
      },
    });
  };
};

export const addAddress = (payload) => {
  // "payload": {
  //     "address": {
  //         "name": "naved",
  //         "mobileNumber": "8802915021",
  //         "address": "A-28-B New DDA Flats Paschim puri",
  //         "pinCode": "110063",
  //         "locality": "delhi",
  //         "city": "New delhi",
  //         "state": "Delhi",
  //         "landmark": "Juhi store",
  //         "alernativePhone": "9811827861",
  //         "addressType": "other"
  //     }
  // }
  console.loge(payload);
  return async (dispatch) => {
    dispatch({
      type: userConstants.ADD_ADDRESS_REQUEST,
    });

    const res = await axiosIntance.post("address/create", { payload });

    if (res.status === 200) {
      dispatch({
        type: userConstants.GET_USER_ADDRESS_SUCCESS,
        payload: { address: res.data.address },
      });
    } else {
      dispatch({
        type: userConstants.ADD_ADDRESS_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};
