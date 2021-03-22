import React, { useState } from "react";
import Counter from "../components/Counter";
import "../App.css";

function CounterPage() {
  const [globalCount, setGlobalCount] = useState(0);

  return (
    <div>
      <h1>Totala siffran är: {globalCount}</h1>
      <Counter setGlobalCount={setGlobalCount} globalCount={globalCount} />
      <Counter setGlobalCount={setGlobalCount} globalCount={globalCount} />
      <Counter setGlobalCount={setGlobalCount} globalCount={globalCount} />
    </div>
  );
}

export default CounterPage;
