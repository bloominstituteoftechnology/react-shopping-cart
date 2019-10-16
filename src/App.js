import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Context
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

// hooks
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useLocalStorage("cart", []);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };
  const removeItm = id => {
    const filteredArr = cart.filter(item => item.id !== id);
    return setCart(filteredArr);
  };
  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{ cart, removeItm }}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
