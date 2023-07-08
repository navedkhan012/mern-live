import { combineReducers } from "redux";
import categories from "./category";

const rootReducer = combineReducers({
  categories: categories,
});

export default rootReducer;
