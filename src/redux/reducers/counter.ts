import { counterAction } from "../../utils/types";

export const counter = (state = 0, action: counterAction): number => {
  switch (action.type) {
    case "add":
      return state + 1;
    case "sub":
      return state - 1;
    default:
      return state;
  }
};
