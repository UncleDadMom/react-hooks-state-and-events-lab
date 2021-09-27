import React from "react";
import { useState } from "react/cjs/react.development";
import Item from "./Item";

function ShoppingList({ itemData }) {
  const [itemsFiltered, setItemsFiltered] = useState(itemData)
  function filterHandler(e){
    if (e.target.value === "All"){
      setItemsFiltered(itemData)
    } else { 
      const filtered = itemData.filter(item => item.category === e.target.value)
      setItemsFiltered(filtered)
    }
    
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={filterHandler} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsFiltered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
