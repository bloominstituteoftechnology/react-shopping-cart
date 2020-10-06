import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import data from './data'
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'

// Components

import Navigation from './components/Navigation'
import Products from './components/Products'
import ShoppingCart from './components/ShoppingCart'


function App() {
	const [products] = useState(data);
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart([...cart, item])
  }

  const removeItem = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  return (
    <div className="App">
      <CartContext.Provider value = {{cart, removeItem}}>
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