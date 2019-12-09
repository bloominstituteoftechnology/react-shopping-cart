import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { CartContext } from './contexts/CartContext.js';
import { ProductContext } from './contexts/ProductContext.js';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<ProductContext.Provider value = {{ products, addItem }}>
			<CartContext.Provider value ={{ cart }}>
				<div className="App">
					<Navigation cart={cart} />
					<Route
						exact
						path="/"
						component={Products}
					/>
					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;