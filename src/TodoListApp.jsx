import React, { useState } from "react";

const TodoListApp = () => {
  const [userTask, setUserTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleAdd = () => {
    if (userTask.trim() === "") return; // Don't add empty tasks
    setTaskList([...taskList, userTask]);
    setUserTask("");
  };

  const handleDelete = (indexToDelete) => {
    const updatedList = taskList.filter((_, index) => index !== indexToDelete);
    setTaskList(updatedList);
  };

  return (
    <>
      <div>TodoListApp</div>

      <div>
        <input
          type="text"
          placeholder="enter yout task"
          value={userTask}
          onChange={(e) => setUserTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {taskList.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => handleDelete(index)}>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TodoListApp;
