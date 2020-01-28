import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import "./App.scss";
import Window from "./components/Window";
import Header from "./components/layouts/Header";
const App = () => {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Header />
        <section>
          <Switch>
            <Route exact path="/explorer/:id" component={Window} />
            <Route exact path="/explorer/" component={Window} />
            <Route exact path="/" render={() => <Redirect to="/explorer" />} />
          </Switch>
        </section>
      </div>
    </HashRouter>
  );
};

export default App;
