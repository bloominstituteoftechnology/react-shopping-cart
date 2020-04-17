import React, { useState } from "react";
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

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = id => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <Navigation cart={cart} />

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
