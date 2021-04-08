import { Provider } from "react-redux";
import React from "react";
import RepositoriesList from "./RepositoriesList";
import { store } from "../state";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
      </div>
      <RepositoriesList />
    </Provider>
  );
};

export default App;
