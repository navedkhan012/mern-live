import { combineReducers } from "redux";
import categories from "./category";

const rootReducer = combineReducers({
  categoryList: categories,
});

export default rootReducer;
