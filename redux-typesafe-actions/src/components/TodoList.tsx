import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const TodoList = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todos = useTypedSelector((state) => state.todos);
  const { addTodo, toggleTodo, removeTodo } = useActions();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(text);
  };
  const onToggle = (id: number) => () => {
    toggleTodo(id);
  };
  const onRemove = (id: number) => () => {
    removeTodo(id);
  };

  return (
    <div>
      <h2>Todo List (count: {todos.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="add todo"
          value={text}
          onChange={onChangeInput}
        />
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
              <span onClick={onRemove(todo.id)} className="remove">
                (x)
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
