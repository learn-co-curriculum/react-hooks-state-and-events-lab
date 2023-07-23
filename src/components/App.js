import React, {useState}from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
   const [darkMode,setDarkMode] = useState(false);

   function handleDarkModeToggle() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
   }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
