import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.scss";
import "antd/dist/antd.css";

import redux from "./store";
import { Provider } from "react-redux";

const { store, persistor } = redux();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
