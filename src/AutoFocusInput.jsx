import React, { useRef, useEffect } from "react";

const AutoFocusInput = () => {
  const inputRef = useRef(null);
  // inputRef is a reference to the input element

  useEffect(() => {
    inputRef.current.focus();
    // current points to the actual DOM node
  }, []); // run only once

  return (
    <div>
      <h2>Auto Focus Input</h2>
      <input type="text" ref={inputRef} placeholder="Type here..." />
    </div>
  );
};

export default AutoFocusInput;
