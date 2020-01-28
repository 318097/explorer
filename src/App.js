import React from "react";
import "./App.css";
import Window from "./components/Window";
import Header from "./components/layouts/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Window />
    </div>
  );
};

export default App;
