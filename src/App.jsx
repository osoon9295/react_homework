import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="layout">
      <p>{count}</p>
      <div>
        <button onClick={plusCount}>➕</button>
        <button onClick={minusCount}>➖</button>
        <button onClick={resetCount}>reset</button>
      </div>
    </div>
  );
};

export default App;
