import React from "react";
import Homepage from "./pages/Homepage";
import "./App.css";
//components

//route
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
