import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleSelection(e){
    setSelectedCategory(e.target.value)
  }

  
  function itemsList(){
      const filteredItems = items.filter((object) => object.category === selectedCategory)
      if(selectedCategory === "All"){
        return items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
      } else {
      return filteredItems.map((item) => (
        <Item key={item.id} name={item.name} category={item.category} />
      ))
      }
  }

  return (
    <div className="ShoppingList"> 
      <div className="Filter">
        <select name="filter" onChange={handleSelection}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsList()}
      </ul>
    </div>
  );
}

export default ShoppingList;
