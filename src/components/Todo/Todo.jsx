import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
// import TodoList from "./TodoList";
import { useSelector } from "react-redux";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import s from "./Todo.module.css";
import { getActions } from "store/reducer";

const Todo = ({ completeTodo, removeTodo, updateTodo }) => {
  const todos = useSelector(getActions);
  const [edit, setEdit] = useState({ id: null, value: "" });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({ id: null, value: "" });
  };
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className={s.icons}>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className={s.deleteIcon}
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className={s.editIcon}
        />
      </div>
    </div>
  ));
};

export default Todo;
