import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import data from './data';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = (id) => {
		setCart(cart.filter(item => item.id !== id));
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
						removeItem={removeItem}
					/>
				)}
			/>

			<Route
				exact
				path="/cart"
				render={() => <ShoppingCart cart={cart} removeItem={removeItem} />}
			/>
		</div>
	);
}

export default App;
