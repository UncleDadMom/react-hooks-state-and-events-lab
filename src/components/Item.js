import React from "react";
import { useState } from "react/cjs/react.development";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(true);


  return (
    <li className={addToCart?"":"in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={()=>setAddToCart(!addToCart)} className="add">{addToCart?"Add to Cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
