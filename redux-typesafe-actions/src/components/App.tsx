import React from "react";
import TodoList from "./TodoList";
import "../App.css";
import { Provider } from "react-redux";
import { store } from "../state";

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;
