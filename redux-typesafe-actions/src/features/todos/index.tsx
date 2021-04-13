import { useEffect, useState } from "react";

type TodoType = {
  id: number;
  text: string;
  done: boolean;
};
type TodoListType = TodoType[];
const initialState: TodoListType = [];

const TodoList = () => {
  const [todos, setTodos] = useState<TodoListType>(initialState);

  useEffect(() => {
    setTimeout(() => {
      setTodos([
        { id: 1, text: "study node.js", done: true },
        { id: 2, text: "study react", done: true },
        { id: 3, text: "study typescript", done: true },
      ]);
    }, 2000);
  }, []);

  return (
    <div>
      <h2>Todo List (count: {todos.length})</h2>
      {todos.length ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
      ) : (
        <div>TodoList is empty</div>
      )}
    </div>
  );
};

export default TodoList;
