import { createStore } from "redux";
import { allReducer } from "../redux/combine";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createTestStore = (): any => {
  return createStore(allReducer);
};
