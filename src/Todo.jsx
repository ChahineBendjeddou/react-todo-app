import React, { useState } from "react";
import "./Todo.css";
const Todo = (props) => {
  const [editing, setEditing] = useState(false);
  const [task, setTask] = useState(props.task);

  function handleDelete(event) {
    props.delete(props.id);
  }
  function handleEdit(event) {
    setEditing((state) => !state);
  }
  function handleChange(event) {
    setTask(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.edit(props.id, task);
    handleEdit();
  }
  function handleComplition(event) {
    props.toggleCompletion(props.id);
  }
  return (
    <div>
      {editing ? (
        <div className="Todo">
          <form className="Todo-edit-form" onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={handleChange} />
            <button>save</button>
          </form>
        </div>
      ) : (
        <div className="Todo">
          <li
            className={`Todo-task ${props.completed && "completed"}`}
            style={{ cursor: "pointer" }}
            onClick={handleComplition}
          >
            {props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={handleEdit}>
              <i className="fa-solid fa-pen"></i>
            </button>
            <button onClick={handleDelete}>
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
