import React, { useState } from "react";

const App = () => {
  const [inputList, setInputList] = useState([]);
  const [term, setTerm] = useState("");

  const renderItems = inputList.map((listItem) => {
    return <h3>{listItem}</h3>;
  });

  // return <div>{renderFruits}</div>;
  const addItem = () => {
    setInputList((oldValues) => {
      return [...oldValues, term];
    });
    setTerm("");
  };

  return (
    <div className="ui container">
      <input
        type="text"
        placeholder="enter to do list items"
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
      <button onClick={addItem}>+</button>
      <div>{renderItems}</div>
    </div>
  );
};

export default App;
