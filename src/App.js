import "./styles.css";
import ToDoList from "./ToDoList";
import NewToDoForm from "./NewToDoForm";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    "Have Fun",
    "Learn React",
    "Learn the MERN-Stack",
    "Learn React Native",
    "Build iOS app with React Native"
  ]);

  const [showTodos, setShowTodos] = useState(true);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      <h1>React To-Do</h1>
      <button onClick={() => setShowTodos(!showTodos)}>
        {showTodos ? "HIDE" : "SHOW"}
      </button>
      {showTodos && <ToDoList todos={todos} />}
      <hr />
      <NewToDoForm addTodo={addTodo} />
    </div>
  );
}
