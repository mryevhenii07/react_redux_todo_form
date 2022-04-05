export const ADD = "ADD";
export const REMOVE = "REMOVE";

export const addAction = (action) => ({
  type: ADD,
  payload: action,
});

export const removeAction = (action) => ({
  type: REMOVE,
  payload: action,
});
