import React from "react";
import Homepage from "./pages/Homepage";
import Donation from "./pages/Donation";
import "./App.css";
//components

//route
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="homepage-root">
      <Homepage />
    </div>
  );
}

export default App;
