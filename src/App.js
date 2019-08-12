import React, { useState } from "react";
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation"; ///
import Products from "./components/Products"; ///
import ShoppingCart from "./components/ShoppingCart"; ////three components

function App() {
  const [products] = useState(data); ////
  const [cart, setCart] = useState([]); /////two state properties

  const addItem = item => {
    setCart([...cart, item]);
  };

  const removeItem = id => {
	   const newCart = cart.filter(item => item.id !== id);
	   setCart([...newCart]);
  };

  return (
    <ProductContext.Provider value={{ products, addItem }}>
      <CartContext.Provider value={{cart, removeItem}}>
        <div className="App">
          <Navigation cart={{cart}} />
          <Route
            exact
            path="/"
            component={Products}/>

          <Route path="/cart" component={ShoppingCart} />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
}

export default App;