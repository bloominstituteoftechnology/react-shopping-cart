import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import { ProductContext, CartContext } from "./contexts";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localStorageCart = window.localStorage.getItem("cart");
    console.log(localStorageCart);
    if (localStorageCart) {
      setCart(JSON.parse(localStorageCart));
    }
  }, []);

  const addItem = item => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    editLocalStorageCart(updatedCart);
  };

  const removeItem = id => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    editLocalStorageCart(updatedCart);
  };

  const editLocalStorageCart = updatedCart => {
    window.localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="App">
      <CartContext.Provider value={cart}>
        <Navigation cart={cart} />
      </CartContext.Provider>
      {/* Routes */}
      <Route exact path="/">
        <ProductContext.Provider value={{ products, addItem }}>
          <Products />
        </ProductContext.Provider>
      </Route>

      <Route path="/cart">
        <CartContext.Provider value={{ cart, removeItem }}>
          <ShoppingCart />
        </CartContext.Provider>
      </Route>
    </div>
  );
}

export default App;
