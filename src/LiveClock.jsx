import React, { useState, useEffect } from "react";

const LiveClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  // time = variable that holds current time
  // setTime = function to update the time

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000); // updates every 1 second

    // Cleanup function: stop the timer when component unmounts
    return () => clearInterval(timer);
  }, []); // empty array = run only once

  return (
    <div>
      <h2>Live Clock ⏰</h2>
      <p>{time}</p>
    </div>
  );
};

export default LiveClock;
