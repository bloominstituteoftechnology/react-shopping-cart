import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import ProductContext from './contexts/ProductContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
//Context
import CartContext from "./contexts/CartContext";


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
		// add the given item to the cart
	};

	return (
		<div className="App">
			<CartContext.Provider value ={{ cart }}>
			<ProductContext.Provider value={{ products, addItem }}>
				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>
			</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
