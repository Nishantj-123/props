import React, { useState } from "react";
import "./Para.css";

function Para() {
  // Initialize state for todos
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", description: "Understand the basics of React", completed: false },
    { id: 2, title: "Build a Todo App", description: "Create a simple todo list app", completed: false },
  ]);
  
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });

  // Function to add a new Todo
  const addTodo = () => {
    if (newTodo.title && newTodo.description) {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          title: newTodo.title,
          description: newTodo.description,
          completed: false,
        },
      ]);
      setNewTodo({ title: "", description: "" }); // Reset the input fields
    }
  };

  // Function to toggle completion status of a Todo
  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a Todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      
      {/* Todo Input Form */}
      <div>
        <input
          type="text"
          placeholder="Title"
          value={newTodo.title}
          onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newTodo.description}
          onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {/* Todo List */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: "10px 0" }}>
            <div
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </div>
            <button onClick={() => toggleCompletion(todo.id)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Para;
