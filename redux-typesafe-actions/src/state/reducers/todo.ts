type TodoType = {
  id: number;
  text: string;
  done: boolean;
};

export type TodoState = TodoType[];

enum ActionType {
  ADD_TODO = "todo/ADD_TODO",
  TOGGLE_TODO = "todo/TOGGLE_TODO",
  REMOVE_TODO = "todo/REMOVE_TODO",
}

export const addTodo = (text: string) => ({
  type: ActionType.ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number) => ({
  type: ActionType.TOGGLE_TODO,
  payload: id,
});

export const removeTodo = (id: number) => ({
  type: ActionType.REMOVE_TODO,
  payload: id,
});

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

type TodoAction = AddTodoAction | ToggleTodoAction | RemoveTodoAction;

const initialState: TodoState = [
  { id: 1, text: "study node.js", done: true },
  { id: 2, text: "study react", done: false },
  { id: 3, text: "study typescript", done: false },
];

export const todoReducer = (
  state: TodoState = initialState,
  action: TodoAction
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
