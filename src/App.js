import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.css";
import Window from "./components/Window";
import Header from "./components/layouts/Header";
const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/explorer/:id" component={Window} />
          <Route exact path="/explorer/" component={Window} />
          <Route exact path="/" render={() => <Redirect to="/explorer" />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
