import React from "react";
import "./App.css";
//components
import CounterPage from "./pages/CounterPage";
import Hello from "./pages/Hello";
//route
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/counter">
          <CounterPage />
        </Route>
        <Route path="/hello">
          <Hello />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
