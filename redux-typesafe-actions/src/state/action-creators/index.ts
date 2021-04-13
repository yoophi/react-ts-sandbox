import { Action } from "../actions";
import { ActionType } from "../action-types";
import { Dispatch } from "redux";

export const addTodo = (text: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_TODO,
      payload: text,
    });
  };
};

export const toggleTodo = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.TOGGLE_TODO,
      payload: id,
    });
  };
};

export const removeTodo = (id: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_TODO,
      payload: id,
    });
  };
};
