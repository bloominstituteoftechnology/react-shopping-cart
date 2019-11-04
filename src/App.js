import React, { useState } from "react";
import { Route } from "react-router-dom";
import {ProductProvider} from "./components/Context/ProductContext";
import {CartProvider} from "./components/Context/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {

  return (
    <div className="App">
      <ProductProvider>
        <CartProvider>
          <Navigation />

          {/* Routes */}
          <Route
            exact
            path="/"
            render={() => <Products />}
          />

          <Route path="/cart" render={() => <ShoppingCart />} />
        </CartProvider>
      </ProductProvider>
    </div>
  );
}

export default App;
