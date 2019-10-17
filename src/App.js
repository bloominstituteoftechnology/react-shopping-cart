import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import { createDecipher } from 'crypto';
import { useLocalStorage } from './utils/useLocalStorage'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('shoppingCard', []);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};
	
	const removeItem = (id) => {
		  console.log('getting id from shopping cart', id)
		  const itemsNotInCart = cart.filter( item => item.id != id)
		  setCart([...itemsNotInCart])
	}
	return (
		<div className="App">
		<ProductContext.Provider value={{products, addItem}}>
		  <CartContext.Provider value={{cart, removeItem}}>
				<Navigation />

				{/* Routes */}
				<Route
					exact
					path="/"
					component={Products}
				/>

				<Route
					path="/cart"
				  component={ShoppingCart}
				/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
		
	);
}

export default App;
