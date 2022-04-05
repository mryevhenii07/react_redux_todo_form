import { Provider } from "react-redux";
import createReduxStorage from "./store";
import "./App.css";
import TodoList from "./components/TodoList/TodoList";

const store = createReduxStorage();
function App() {
  return (
    <Provider store={store}>
      <div className="todo-app">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
