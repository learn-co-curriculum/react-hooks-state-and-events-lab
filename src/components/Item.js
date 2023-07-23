import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleToggleCart() {
    setInCart((prevInCart) => !prevInCart);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleToggleCart}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}
 export default Item;