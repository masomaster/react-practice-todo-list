import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

export default function ToDoList({ todos }) {
  return (
    <ul className="ToDoList">
      {todos.map((t, idx) => (
        <ToDoListItem todo={t} index={idx} key={idx} />
      ))}
    </ul>
  );
}
