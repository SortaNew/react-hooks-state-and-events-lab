import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)
  const appClassName = inCart ? 'in-cart' : '' 
  const addOrRemove = inCart ? 'Remove From Cart' : 'Add to Cart'
  function handleAdd(){
    setInCart(inCart => (!inCart))
  }
  return (
    <li className={appClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAdd} className="add">{addOrRemove}</button>
    </li>
  );
}

export default Item;
