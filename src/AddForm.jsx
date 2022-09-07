import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./AddForm.css";
const AddForm = (props) => {
  const [task, setTask] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    if (!task) return;
    props.add({ task, id: uuid(), completed: false });
    setTask("");
  }
  function handleChange(event) {
    setTask(event.target.value);
  }
  return (
    <form className="AddForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddForm;
