import React, { useState } from "react";
import "./App.scss";
import Header from "./header";
import Cards from "./cards";
import Control from "./control";
import EmptyPage from "./emptyPage";
import initialData from "../db/seeds";

export type CARDANIMATIONSTATE = "normal" | "yes" | "no";
export type PEOPLE = {
  id: string;
  name: string;
  age: number;
  img: string;
};

const App: React.FC = () => {
  const [people, setPeople] = useState(initialData);
  const [cardAnimation, setCardAnimation] = useState<CARDANIMATIONSTATE>(
    "normal"
  );

  console.log(cardAnimation);

  return (
    <div className="phone">
      <div className="app">
        <Header />
        {people && people.length > 0 ? (
          <>
            <Cards people={people} cardAnimation={cardAnimation} />
            <Control
              setPeople={setPeople}
              setCardAnimation={setCardAnimation}
            />
          </>
        ) : (
          <EmptyPage />
        )}
      </div>
    </div>
  );
};

export default App;
