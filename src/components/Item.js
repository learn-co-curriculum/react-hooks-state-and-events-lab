import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleClick() {
    setIsInCart(!isInCart);
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className={isInCart ? "remove" : "add"}>
        {isInCart ? "Remove from cart" : "Add to cart"}
      </button>
    </li>
  );
}

export default Item;
