import React, { useState } from "react";

const Counter = ({ setGlobalCount, globalCount }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h2>Counter: {count} </h2>
      <button
        onClick={() => setCount(count + 1) + setGlobalCount(globalCount + 1)}
      >
        Plus 1
      </button>
    </div>
  );
};
export default Counter;
