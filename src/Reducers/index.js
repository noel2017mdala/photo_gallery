import { combineReducers } from "redux";
import fetch from "./fetchReducer";
import search from "./Search";

let allReducers = combineReducers({
  search: search,
  fetchData: fetch,
});

export default allReducers;
