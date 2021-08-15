import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isItDark, setIsDark] = useState(false)
  const [isItLight, setIsLight] = useState(false)

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

function handleDarkMode(){
  setIsDark((isItDark) => !isItDark);
}

function handleLightMode(){
  setIsLight((isItLight) => !isItLight )
}



// const backColor = isItDark? '#001219' : '#f1faee'
// style={{background:backColor}}
return (
    <div className={"App" + (false ? "dark" : "light")}>
      <header>
        {/* <h2>Shopster</h2>
        <button  onClick={handleDarkMode}>{isItDark ? 'dark' : 'light'}  Dark Mode</button> */}

        <div className="App dark">
        <button  onClick={handleDarkMode}>{isItDark ? 'dark' : 'light'}  Dark Mode</button>
        </div>

        <div className="App light">
        <button  onDoubleClick={handleLightMode}>{isItLight ? 'light' : 'dark'}  light Mode</button>
        </div>
  
      </header>
      <ShoppingList items={items} />
    </div>
    
   

  );
}

export default App;
