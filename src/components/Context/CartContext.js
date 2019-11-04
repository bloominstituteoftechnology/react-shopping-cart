import React, {useState, createContext} from "react";


export const  CartContext = createContext({}); 

export const CartProvider = (props) => {
const [cart, setCart] = useState([]);
const addItem = item => {
    setCart(prevCart => [...prevCart, item]);
  };
  return(
<CartContext.Provider value={{cart, addItem}}>
{props.children}
</CartContext.Provider>

  )}

