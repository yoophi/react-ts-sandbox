import { Action } from "../actions";
import { createReducer } from "typesafe-actions";
import { addTodo, removeTodo, toggleTodo } from "../action-creators";

type TodoType = {
  id: number;
  text: string;
  done: boolean;
};

export type TodoState = TodoType[];

const initialState: TodoState = [
  { id: 1, text: "study node.js", done: true },
  { id: 2, text: "study react", done: false },
  { id: 3, text: "study typescript", done: false },
];

export const todoReducer = createReducer<TodoState, Action>(initialState)
  .handleAction([addTodo], (state, { payload: text }) => {
    return [
      ...state,
      {
        id: Math.max(...state.map((todo) => todo.id)) + 1,
        text: text,
        done: false,
      },
    ];
  })
  .handleAction([toggleTodo], (state, { payload: id }) => {
    return state.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  })
  .handleAction([removeTodo], (state, { payload: id }) => {
    return state.filter((todo) => todo.id !== id);
  });
