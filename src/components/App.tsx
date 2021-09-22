import React, { useState } from "react";
import "./App.scss";
import Header from "./header";
import Cards from "./cards";
import Control from "./control";
import EmptyPage from "./emptyPage";
import initialData from "../db/seeds";

const App: React.FC = () => {
  const [people, setPeople] = useState(initialData);

  return (
    <div className="phone">
      <div className="app">
        <Header />
        {people && people.length > 0 ? (
          <>
            <Cards people={people} setPeople={setPeople} />
            <Control />
          </>
        ) : (
          <EmptyPage />
        )}
      </div>
    </div>
  );
};

export default App;
