import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";
import productReducer from "./product";
import orderReducer from "./order";
import categoryReducer from "./category";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  orders: orderReducer,
});

export default rootReducer;
