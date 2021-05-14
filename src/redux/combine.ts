import { combineReducers } from "redux";
import { counter } from "./reducers/counter";

export const allReducer = combineReducers({
  counter: counter,
});
