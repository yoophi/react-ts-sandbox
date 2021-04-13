import { ActionType } from "../action-types";

interface AddTodoAction {
  type: ActionType.ADD_TODO;
  payload: string;
}

interface ToggleTodoAction {
  type: ActionType.TOGGLE_TODO;
  payload: number;
}

interface RemoveTodoAction {
  type: ActionType.REMOVE_TODO;
  payload: number;
}

export type Action = AddTodoAction | ToggleTodoAction | RemoveTodoAction;
