import { combineReducers } from "redux";
import categories from "./category";
import products from "./product";
import page from "./page";
import auth from "./auth";
import productDetail from "./productDetail";
import cart from "./cart";
import useraddress from "./useraddress";

const rootReducer = combineReducers({
  auth: auth,
  categoryList: categories,
  products: products,
  page: page,
  productDetail: productDetail,
  cart: cart,
  useAddress: useraddress,
});

export default rootReducer;
