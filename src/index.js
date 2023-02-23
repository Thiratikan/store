import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  //cart
  //products
});

let store = createStore(rootReducer, {
  //products : Product Reducer
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      dew
      <App />
    </Provider>
  </React.StrictMode>
);
