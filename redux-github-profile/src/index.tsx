import "./index.css";

import { applyMiddleware, createStore } from "redux";

import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import Thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./modules";

const store = createStore(rootReducer, applyMiddleware(Thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
