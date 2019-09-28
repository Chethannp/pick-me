import { combineReducers } from "redux";
import dummyReducer from "./dummy/dummy.reducers";

export default combineReducers({
  dummy: dummyReducer
});
