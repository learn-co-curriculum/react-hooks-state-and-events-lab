import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  //state variable declared
  //isOn is the state of the button which is false
  //setValue is the setter function to change isOn
  const [isDarkMode, setIsDarkMode] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 
  const appClass = isDarkMode ? "App dark" : "App light"
  function handleDarkMode(){
    setIsDarkMode(isDarkMode => !isDarkMode);
  }

  return (
    //update className based on state variable
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>
          {isDarkMode ? "dark" : "light"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
