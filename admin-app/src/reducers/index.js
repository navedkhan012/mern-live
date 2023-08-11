import { combineReducers } from "redux";
import authReducer from "./auth";
import userReducer from "./user";
import productReducer from "./product";
import orderReducer from "./order";
import categoryReducer from "./category";
import pageReducer from "./page";
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  products: productReducer,
  categories: categoryReducer,
  orders: orderReducer,
  page: pageReducer,
});

export default rootReducer;
