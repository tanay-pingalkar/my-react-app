import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./styles/global.scss";

// redux setup
import { applyMiddleware, createStore } from "redux";
import { allReducer } from "./redux/combine";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(allReducer, composedEnhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
