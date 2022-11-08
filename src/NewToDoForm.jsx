import { useState } from "react";

export default function NewToDoForm({ addTodo }) {
  const [newToDo, setNewToDo] = useState("");

  function handleAddTodo() {
    addTodo(newToDo);
    setNewToDo("");
  }

  return (
    <>
      <h2>New To-Do</h2>
      <input
        value={newToDo}
        onChange={(evt) => setNewToDo(evt.target.value)}
        placeholder="New To-Do"
      />
      <button onClick={handleAddTodo}>Add To-Do</button>
    </>
  );
}
