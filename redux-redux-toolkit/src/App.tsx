import "./App.css";

import { FormEvent, useState } from "react";
import { User, addUser } from "./slices/users";
import { useDispatch, useSelector } from "react-redux";

import { ReducerType } from "./rootReducer";

function App() {
  const [name, setName] = useState("");
  const users = useSelector<ReducerType, User[]>((state) => state.users);
  const dispatch = useDispatch();
  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };
  const handleAddUser = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addUser({ name } as User));
    setName("");
  };
  return (
    <div>
      <form onSubmit={handleAddUser}>
        <input type="text" value={name} onChange={handleChangeName} />
        <button type="submit">Add User</button>
      </form>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default App;
