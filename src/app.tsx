import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./components/counter";

const App = (): JSX.Element => {
  return (
    <Router>
      <Route path="/">
        <Counter></Counter>
      </Route>
    </Router>
  );
};

export default App;
