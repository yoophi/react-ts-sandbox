import { ChangeEvent, FormEvent, useState } from "react";
import { addTodo, removeTodo, toggleTodo } from "../state/reducers/todo";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "../state/store";

const TodoList = () => {
  const todos = useSelector((state: RootStateType) => state.todos);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(value));
  };
  const onToggle = (id: number) => () => {
    dispatch(toggleTodo(id));
  };
  const onRemove = (id: number) => () => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h2>Todo List (count: {todos.length})</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="add todo"
          value={value}
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
