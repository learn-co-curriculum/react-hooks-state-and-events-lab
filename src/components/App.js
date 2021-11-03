import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [classState, toggleState] = useState(false)

  function changeClassState() {
    toggleState(on => !on)
  }

  const appClass = (classState ? "App dark" : "App light")

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={changeClassState}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
