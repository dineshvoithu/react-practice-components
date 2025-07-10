import React, { useState, useEffect, useRef } from "react";

const PreviousCounter = () => {
  const [count, setCount] = useState(0); // State to store current count
  const prevCount = useRef(); // Ref to store previous count

  useEffect(() => {
    prevCount.current = count; // Update ref after every render
  }, [count]);

  return (
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCount.current}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default PreviousCounter;
