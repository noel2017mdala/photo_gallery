import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducer from "./Reducers";
const initialState = {};
const middleware = [thunk];
const store = createStore(
  allReducer,
  initialState,
  applyMiddleware(...middleware)
);
export default store;
