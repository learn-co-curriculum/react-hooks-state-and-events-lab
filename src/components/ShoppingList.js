import React from "react";
import Item from "./Item";
import { useState } from "react";




function ShoppingList({ items }) {

  const [selectedCategory,setSelectedCategory] = useState('All')

  function handleChanges(e){
    setSelectedCategory(e.target.value)
  }
  
  const displayItem = items.filter((i) => {
    if(selectedCategory === "All") 
      return true
      return i.category === selectedCategory;
  });
  





  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChanges}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItem.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
