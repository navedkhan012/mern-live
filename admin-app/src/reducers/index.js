// export default (state = { name: "naved" }, action) => {
//   return state;
// };

import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
