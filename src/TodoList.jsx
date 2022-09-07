import React, { useState } from "react";
import Todo from "./Todo";
import AddForm from "./AddForm";
import "./TodoList.css";
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  function addTodo(todo) {
    setTodos((state) => [...state, todo]);
  }
  function deleteTodo(id) {
    setTodos((state) => state.filter((t) => t.id !== id));
  }
  function editTodo(id, task) {
    const newTodos = todos.map((t) => {
      if (t.id === id) t.task = task;
      return t;
    });
    setTodos(newTodos);
  }
  function toggleCompletion(id) {
    const newTodos = todos.map((t) => {
      if (t.id === id) t.completed = !t.completed;
      return t;
    });
    setTodos(newTodos);
  }
  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo App</span>
      </h1>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            task={todo.task}
            id={todo.id}
            delete={deleteTodo}
            completed={todo.completed}
            edit={editTodo}
            toggleCompletion={toggleCompletion}
          />
        ))}
      </ul>
      <AddForm add={addTodo} />
    </div>
  );
};

export default TodoList;
