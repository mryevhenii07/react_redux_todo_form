import { createStore } from "redux";
import actionReducer from "./reducer";

const createReduxStorage = () => {
  const store = createStore(actionReducer);

  return store;
};

export default createReduxStorage;
