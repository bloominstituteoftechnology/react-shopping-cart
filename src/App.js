import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
import { useLocalStorage } from './hooks/useLocalStorage'

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useLocalStorage('cart' ,[]);

  const addItem = (item) => {
    // add the given item to the cart
    setCart([...cart, item]);
  };

  const removeItem = (item) => {
    let cartList = cart.filter((element) => {
      return element.id !== item.id;
    });
    setCart(cartList);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <div className="App">
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation cart={cart} />

          {/* Routes */}
          <Route exact path="/">
            <Products />
          </Route>

          <Route path="/cart">
            <ShoppingCart />
          </Route>
        </CartContext.Provider>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
