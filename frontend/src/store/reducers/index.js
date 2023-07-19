import { combineReducers } from "redux";
import categories from "./category";
import products from "./product";

const rootReducer = combineReducers({
  categoryList: categories,
  products: products,
});

export default rootReducer;
