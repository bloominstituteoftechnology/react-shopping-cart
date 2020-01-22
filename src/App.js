import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext'

function App() {

	const localCart = JSON.parse(localStorage.getItem('cart'))
	const [products] = useState(data);
	const [cart, setCart] = useState(() => !localCart ? [] : localCart);

	useEffect(() => {
		
	localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = itemTitle => {
		setCart(cart.filter(item => item.title !== itemTitle))
	}

	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{cart, removeItem}}>
				<div className="App">
					<Navigation cart={cart} />

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
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;