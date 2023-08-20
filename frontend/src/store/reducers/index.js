import { combineReducers } from "redux";
import categories from "./category";
import products from "./product";
import page from "./page";
import auth from "./auth";
import productDetail from "./productDetail";

const rootReducer = combineReducers({
  auth: auth,
  categoryList: categories,
  products: products,
  page: page,
  productDetail: productDetail,
});

export default rootReducer;
