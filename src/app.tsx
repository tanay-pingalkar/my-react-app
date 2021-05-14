import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./components/counter";
import { hot } from "react-hot-loader";

const App = (): JSX.Element => {
  return (
    <Router>
      <Route path="/">
        <Counter></Counter>
      </Route>
    </Router>
  );
};

export default hot(module)(App);
