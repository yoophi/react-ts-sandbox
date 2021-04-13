import { createStore } from "redux";
import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./reducers/todo";

const rootReducer = combineReducers({
  todos: todoReducer,
});
export type RootStateType = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);

export default store;
