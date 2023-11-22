import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false); // Initialize with false
  const toggleCartStatus = () => {
    setIsInCart(!isInCart); // Toggle the cart status
  };
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {isInCart ? "Remove From Cart" : "Add to cart"} {/* "Add to cart" here */}
      </button>
    </li>
  );
}

export default Item;
