import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, selectState] = useState("fiddo")

  function filterState(e) {
    selectState(e.target.value);
  }

  const filteredItems = items.filter(item => selectedCategory === "fiddo" ? true : (item.category === selectedCategory))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterState} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
