import React, { useState, createContext } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

// Contexts
import { ProductContext } from "./contexts/ProductContext";

export const CartContext = createContext();

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // add the given item to the cart
    setCart(item);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={products}>
        <Navigation cart={cart} />

        {/* Routes */}
        <Route exact path="/">
          <Products products={products} addItem={addItem} />
        </Route>

        <Route path="/cart">
          <ProductContext.Consumer value={products}>
            <ShoppingCart cart={cart} />
          </ProductContext.Consumer>
        </Route>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
