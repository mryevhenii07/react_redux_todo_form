import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import Todo from "../Todo/Todo";
import s from "./TodoList.module.css";
import { addAction, removeAction } from "store/actions";
import { getActions } from "store/reducer";

const TodoList = () => {
  const dispath = useDispatch();
  // const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    dispath(addAction(todo));
    // const newTodos = [todo, ...todos];
    // setTodos(newTodos);
    // console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    // FIXME: here !!! - add updating todo by you own please
  };

  const removeTodo = (id) => {
    dispath(removeAction(id));
  };

  const completeTodo = (id) => {
    // let updatedTodos = todos.map((todo) => {
    //   if (todo.id === id) {
    //     todo.isComplete = !todo.isComplete;
    //   }
    //   return todo;
    // });
    // setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className={s.title}>Whats the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
