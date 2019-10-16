import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
const Item = props => {
  const { cart, removeItm } = useContext(CartContext);
  console.log("this is cart from item remove", cart);
  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button onClick={() => removeItm(props.id)}>Remove from cart</button>
      </div>
    </div>
  );
};

export default Item;
