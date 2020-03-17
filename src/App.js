import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    const newItem = {
      id: Date.now(),
      title: item.title,
      price: item.price,
      image: item.image
    };
    setCart([...cart, newItem]);
  };

  const deleteItem = item => {
    setCart(cart.filter(a => a.id !== item.id));
  };

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, deleteItem }}>
        <ProductContext.Provider value={{ products, addItem }}>
          <Navigation />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </ProductContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
