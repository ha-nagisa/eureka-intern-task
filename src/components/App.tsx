import React from "react";
import "./App.scss";
import Header from "./header";
import Control from "./control";

const App: React.FC = () => {
  return (
    <div className="phone">
      <div className="app">
        <Header />
        <Control />
      </div>
    </div>
  );
};

export default App;
