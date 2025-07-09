import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count >= 0 ? count + 1 : 0)}>
        Increase
      </button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Decrease
      </button>
      <button onClick={() => setCount(count * 0)}>Reset</button>
    </div>
  );
};

export default Counter;
