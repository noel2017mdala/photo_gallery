import { combineReducers } from "redux";
import { fetchQuery } from "./searchReducer";

let allReducer = combineReducers({
  fetchQuery,
});

export default allReducer;
