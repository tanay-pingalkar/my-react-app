import { counterAction } from "../../utils/types";

export const counterChange = (action: "add" | "sub"): counterAction => {
  return {
    type: action,
  };
};
