import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleAddItem() {
    if (inputText !== "") {
      setItems((prevItems) => [...prevItems, inputText]);
      setInputText("");
    }
  }

  function handleDeleteItem(index) {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      handleAddItem();
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          type="text"
          value={inputText}
        />
        <button onClick={handleAddItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <li key={index}>
              {todoItem + "  "}
              <button onClick={() => handleDeleteItem(index)}>
                <span>Delete</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
