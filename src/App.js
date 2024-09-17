import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ProductContext from './contexts/ProductContext';
import CartContent from './contexts/CartContext';

import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

 const useLocalStorage = (key, initialValue) =>{
    const [storedValue, setStoredValue] = useState(() => {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    });
  
    const setValue = value => {
      // Save state
      setStoredValue(value);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(value));
    };
    return [storedValue, setValue];
  };
function App() {
	const [products] = useLocalStorage('product',data);
	const [cart, setCart] = useLocalStorage('cart',[]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		
		<div className="App">
			<CartContent.Provider value={cart}>
				
			<Navigation />
			</CartContent.Provider>

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>

			<Route
				exact
				path="/"
			component={Products}
			/>
			</ProductContext.Provider>
			<CartContent.Provider value={cart}>

			<Route
				path="/cart"
				component={ShoppingCart}
			/>
			</CartContent.Provider>
		</div>
	);
}

export default App;