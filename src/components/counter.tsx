import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterChange } from "../redux/actions/couterChange";
import { state } from "../utils/types";

const Counter = (): JSX.Element => {
  const counter = useSelector((state: state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(counterChange("sub"))}>-</button>
      <h1 data-testid="counter">{counter}</h1>
      <button onClick={() => dispatch(counterChange("add"))}>+</button>
    </div>
  );
};

export default Counter;
