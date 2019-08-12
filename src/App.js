import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import ProductContext from "./contexts/products";
import CartContext from "./contexts/cart"

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState(JSON.parse(window.localStorage.getItem("cart")) || []);

	const handleAddCart = item => {
		const newCart = [...cart, item];
		window.localStorage.setItem("cart", JSON.stringify(newCart));
		setCart(newCart);
	};

	const removeFromCart = id => {
		const newCart = cart.filter(item => item.id !== id);
		window.localStorage.setItem("cart", JSON.stringify(newCart));
		setCart(newCart);
	};

	return (
		<div className="App">
			<ProductContext.Provider value = {{ products }}>
				<CartContext.Provider value = {{ cart, addToCart: handleAddCart, removeFromCart }}>
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						render={() => (
							<Products />
						)}
					/>

					<Route
						path="/cart"
						render={() => <ShoppingCart />}
					/>
				</CartContext.Provider>
			</ProductContext.Provider> 
		</div>
	);
}

export default App;
