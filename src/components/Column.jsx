import "./Column.css";
import Task from "./Task";
import { useStore } from "../store.js";
import { useState } from "react";

const Column = ({ state }) => {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const tasks = useStore((store) =>
    store.tasks.filter((task) => task.state === state)
  );
  const addTask = useStore((store) => store.addTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);

  const submit = () => {
    addTask(text, state);
    setText("");
    setOpen(false);
  };

  const keypress = (e) => e.key === "Enter" && submit();

  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        console.log(draggedTask);
        setDraggedTask(null);
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((task, i) => (
        <Task title={task.title} key={task.title + i} />
      ))}
      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input
              type="text"
              autoFocus
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => keypress(e)}
              value={text}
            />
            <button onClick={submit}>Submit</button>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Column;
