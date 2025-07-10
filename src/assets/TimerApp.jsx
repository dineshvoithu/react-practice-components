import React, { useState, useEffect, useRef } from "react";

const TimerApp = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null); // stores the timer ID

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // cleanup old interval
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handlePauseResume = () => {
    setIsRunning(!isRunning); // toggle between pause and resume
  };

  return (
    <div>
      <h2>⏱ Timer: {seconds} sec</h2>
      <button onClick={handlePauseResume}>
        {isRunning ? "Pause" : "Resume"}
      </button>
    </div>
  );
};

export default TimerApp;
