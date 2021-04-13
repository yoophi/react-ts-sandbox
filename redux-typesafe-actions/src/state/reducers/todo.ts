import { ActionType } from "../action-types";
import { Action } from "../actions";

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

export const todoReducer = (
  state: TodoState = initialState,
  action: Action
): TodoState => {
  switch (action.type) {
    case ActionType.ADD_TODO:
      return [
        ...state,
        {
          id: Math.max(...state.map((todo) => todo.id)) + 1,
          text: action.payload,
          done: false,
        },
      ];
    case ActionType.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case ActionType.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
