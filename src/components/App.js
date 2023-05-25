import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
 //use state here
 const [darkModeOn, setDarKMode] = useState(false);

  function DarkMode(){
      //what use state does
      console.log("I've been clicked")
      setDarKMode((darkModeOn) => !darkModeOn) 
      //console.log(darkModeOn) 
  }
  //console.log(darkModeOn) 


  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = darkModeOn ? `App dark` : `App light`

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {DarkMode}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
