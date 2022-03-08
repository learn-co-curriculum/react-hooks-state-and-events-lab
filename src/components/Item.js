import React, {useState} from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(true)
  const cartState = addToCart ? "" : "in-cart"
  const cartName = addToCart ? "Add to Cart" : "Remove From Cart"

  function changeCart() {
    if(addToCart === true) {
      setAddToCart(false)
    }else{
      setAddToCart(true)
    }
  }
  return (
    <li className={cartState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeCart}>{cartName}</button>
    </li>
  );
}

export default Item;
