import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const Item = props => {
  const value = useContext(CartContext);

  return (
    <div className="shopping-cart_item">
      <img src={props.image} alt={`${props.title} book`} />

      <div>
        <h1>{props.title}</h1>
        <p>$ {props.price}</p>
        <button
          onClick={() => {
            console.log(value.cart);
            value.deleteItem(props);
          }}
        >
          Remove from cart
        </button>
      </div>
    </div>
  );
};

export default Item;
