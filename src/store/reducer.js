import { ADD, REMOVE } from "./actions";

const defaultState = {
  actions: [],
};

const actionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD:
      const actions = [...state.actions, action.payload];

      return {
        ...state,
        actions,
      };
    case REMOVE:
      return {
        ...state,
        actions: state.actions.filter((act) => act.id !== action.payload),
      };
    default:
      return state;
  }
};

export const getActions = (state) => state.actions;

export default actionReducer;
