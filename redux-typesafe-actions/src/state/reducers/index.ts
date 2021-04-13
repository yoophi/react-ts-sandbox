import { combineReducers } from "redux";
import { todoReducer } from "./todo";

const reducers = combineReducers({
  todos: todoReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
