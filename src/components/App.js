import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from 'react'

const App = () => {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [switcher, setSwitcher] = useState(false)

  const clicker = () => {
    setSwitcher((prevSwitcher) => !prevSwitcher)
  }
  
  const appClass = switcher ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={clicker}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
