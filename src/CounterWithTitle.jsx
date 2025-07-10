import React, { useState, useEffect } from "react";

const CounterWithTitle = () => {
  const [count, setCount] = useState(0);
  // count: variable storing current count
  // setCount: function to update count

  useEffect(() => {
    document.title = `Count: ${count}`;

    // runs every time 'count' changes
  }, [count]); // dependency array

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default CounterWithTitle;
