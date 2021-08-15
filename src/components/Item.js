import React, { useState } from "react";


function Item({ name, category }) {
  const [isInCart , setInCart] = useState(false)




  function hundleAddCart(){
    setInCart((isInCart) => !isInCart)
  }

const cartCondition = isInCart ? "Remove cart " : "Add cart " ;

  return (
    <li className="in-cart">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add"  onClick={hundleAddCart}> {cartCondition}Cart</button>
    </li>
  );
}

export default Item;
