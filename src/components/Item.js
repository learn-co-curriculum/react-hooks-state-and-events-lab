import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false);

  function addToCart(){
    //console.log("You've added me!")
    setInCart((inCart) => !inCart)

  }

  const cartStatus = inCart ? "in-cart" : ""

  const buttonCartStatus = inCart ? "Remove From Cart" : "Add to Cart" 


  return (
     <li className={cartStatus}> 
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick = {addToCart}>{buttonCartStatus}</button>
    </li>

  );
}

export default Item;
