import React, { useReducer, useState } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "delete":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
}

const TodoReducerSwitch = () => {
  const [task, setTask] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);

  const handleAdd = () => {
    if (task.trim() !== "") {
      dispatch({ type: "add", payload: task });
      setTask("");
    }
  };

  return (
    <div>
      <h2>📝 Todo List (useReducer + switch)</h2>
      <input
        type="text"
        placeholder="Enter you task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button
              onClick={() => dispatch({ type: "delete", payload: index })}
            >
              ❌ Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoReducerSwitch;
