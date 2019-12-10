import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { ProductContext } from "./contexts/ProductContext";

import { CartContext } from "./contexts/CartContext";

import { RemoveContext } from "./contexts/RemoveContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
  };
  const removeItem = id => {
    console.log("stuff being passed in", id);

    let newList = cart.filter(book => {
      return book.id !== id;
    });

    console.log("newList", newList);

    setCart(newList);
  };
  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={cart}>
        <div className="App">
          <Navigation cart={cart} />

          {/* Routes */}

          <Route
            exact
            path="/"
            render={() => <Products products={products} addItem={addItem} />}
          />
          <RemoveContext.Provider value={{ products, removeItem }}>
            <Route path="/cart" render={() => <ShoppingCart cart={cart} />} />
          </RemoveContext.Provider>
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;
