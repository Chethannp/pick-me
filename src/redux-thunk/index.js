import { combineReducers } from "redux";
import listReducer from "./list/list.reducers";

export default combineReducers({
  list: listReducer
});
