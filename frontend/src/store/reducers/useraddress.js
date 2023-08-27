/* eslint-disable no-duplicate-case */
/* eslint-disable import/no-anonymous-default-export */
import { userConstants } from "../constents";
const initialState = {
  payload: {
    address: [],
  },
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case userConstants.GET_USER_ADDRESS_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case userConstants.GET_USER_ADDRESS_SUCCESS:
      state = {
        ...state,
        payload: {
          address: action.payload,
        },

        loading: false,
      };
      break;
    case userConstants.GET_USER_ADDRESS_FAILURE:
      state = {
        ...state,
        error: action.payload.error,
        loading: false,
      };
      break;

    default:
      break;
  }
  return state;
};
