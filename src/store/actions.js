// import { createAction } from "@reduxjs/toolkit";

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

// export const addAction = createAction("ADD");
// export const removeAction = createAction("REMOVE");
