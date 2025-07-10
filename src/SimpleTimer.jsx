import React, { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";

const SimpleTimer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  const user = useContext(UserContext);
  return (
    <div>
      SimpleTimer
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}> Increase</button>
      <button onClick={() => setCount(count - 1)}> Increase</button>
      <h3>Hello, {user.name} 👋</h3>
      <h4>{user.role}</h4>
    </div>
  );
};

export default SimpleTimer;
