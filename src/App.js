import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Window from "./components/Window";
import Header from "./components/layouts/Header";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/:id" component={Window} />
          <Route exact path="/" component={Window} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
