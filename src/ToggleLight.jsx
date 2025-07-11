import React, { useReducer } from "react";

// Reducer function using if-else
function reducer(state, action) {
  if (action.type === "toggle") {
    return { isOn: !state.isOn };
  } else {
    return state;
  }
}

const ToggleLight = () => {
  const [state, dispatch] = useReducer(reducer, { isOn: false });

  return (
    <div>
      <h2>The light is {state.isOn ? "ON" : "OFF"}</h2>
      <button onClick={() => dispatch({ type: "toggle" })}>
        Turn {state.isOn ? "OFF" : "ON"}
      </button>
    </div>
  );
};

export default ToggleLight;
