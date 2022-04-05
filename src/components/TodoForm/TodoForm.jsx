import { useState, useEffect, useRef } from "react";
import s from "./TodoForm.module.css";
const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handelChange = (e) => {
    setInput(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  return (
    <form className={s.todoForm} onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handelChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
};

export default TodoForm;
