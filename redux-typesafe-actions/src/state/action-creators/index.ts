import { ActionType } from "../action-types";
import { createAction } from 'typesafe-actions'

export const addTodo = createAction(ActionType.ADD_TODO)<string>()
export const toggleTodo = createAction(ActionType.TOGGLE_TODO)<number>()
export const removeTodo = createAction(ActionType.REMOVE_TODO)<number>()
