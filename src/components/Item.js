import React, { useState } from "react";

function Item({ name, category }) {
  const [nameState, toggleState] = useState(false)

  function changeNameState() {
    toggleState(on => !on)
  }

  const classContent = (nameState ? "in-cart" : "")
  const textContent = (nameState ? "Remove From Cart" : "Add to Cart")

  return (
    <li className={classContent}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={changeNameState} className="add">{textContent}</button>
    </li>
  );
}

export default Item;
