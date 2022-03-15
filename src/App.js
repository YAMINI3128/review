import React, { useState } from "react";
import Todoform from "./components/Todoform";
import Todolist from "./components/Todolist";

function App() {
  const [todos, settodos] = useState([
    { id: 1, tittle: "PlayTime", isCompleted: false },
    { id: 2, tittle: "Soup Prepare", isCompleted: true },
    { id: 3, tittle: "Car Washing", isCompleted: false },
  ]);

  const checkTodo = (id) => {
    console.log(id);
    settodos(
      todos.map((todo) => {
        if (todo.id === id) todo.isCompleted = !todo.iscompleted;
        console.log(todo.isCompleted);
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    settodos(todos.filter((todo) => todo.id !== id));
  };

  // Add a todo
  const addtodo = (text) => {
    const newTodo = {
      id: 5,
      tittle: text,
      isCompleted: false,
    };
    settodos([...todos, newTodo]);
  };
  return (
    <div>
      <Todoform addtodo={addtodo} />
      <Todolist todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
