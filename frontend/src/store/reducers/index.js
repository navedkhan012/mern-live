import { combineReducers } from "redux";
import categories from "./category";
import products from "./product";
import page from "./page";

const rootReducer = combineReducers({
  categoryList: categories,
  products: products,
  page: page,
});

export default rootReducer;
