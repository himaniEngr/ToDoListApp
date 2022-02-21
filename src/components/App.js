import React, { useState } from "react";
import "../style.css";
const App = () => {
  const [inputList, setInputList] = useState([]);
  const [term, setTerm] = useState("");

  const deleteItem = (id) => {
    setInputList((oldInput) => {
      return oldInput.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  const renderItems = inputList.map((listItem, index) => {
    return (
      <div className="item" key={index} id={index.toString()}>
        <button className="delete-button" onClick={() => deleteItem(index)}>
          X
        </button>
        <h3>{listItem}</h3>
      </div>
    );
  });

  // return <div>{renderFruits}</div>;
  const addItem = () => {
    if (term != "") {
      setInputList((oldValues) => {
        return [...oldValues, term];
      });
      setTerm("");
    } else {
      alert("empty not alllowed");
    }
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
