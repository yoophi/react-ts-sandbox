import { FormEvent, useEffect, useRef, useState } from "react";

type TodoType = {
  id: number;
  text: string;
  done: boolean;
};
type TodoListType = TodoType[];
const initialState: TodoListType = [];

const TodoList = () => {
  const [todos, setTodos] = useState<TodoListType>(initialState);
  const input = useRef<HTMLInputElement>(null);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.max(...todos.map((todo) => todo.id)) + 1,
        text: String(input.current?.value),
        done: false,
      },
    ]);
  };

  useEffect(() => {
    setTimeout(() => {
      setTodos([
        { id: 1, text: "study node.js", done: true },
        { id: 2, text: "study react", done: false },
        { id: 3, text: "study typescript", done: false },
      ]);
    }, 2000);
  }, []);

  const onToggle = (id: number) => () => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div>
      <h2>Todo List (count: {todos.length})</h2>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="add todo" ref={input} />
        <button type="submit">Add</button>
      </form>
      {todos.length ? (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                onClick={onToggle(todo.id)}
                className={todo.done ? "done" : ""}
              >
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <div>TodoList is empty</div>
      )}
    </div>
  );
};

export default TodoList;
