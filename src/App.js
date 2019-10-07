import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components imported
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'

console.log(ProductContext)

function App() {
	//put in ProductContext
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	// will add item to exsisting items in cart
	// remove and put in ProductContext
	const addItem = item => {
		setCart([...cart, item]);
	};

	return (
		<ProductContext.Provider value={{ products, addItem }}>
		<CartContext.Provider value={{ cart }}>
		<div className="App">
			<Navigation component={Navigation} />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
					/>
				)}
			/>

			<Route
				path="/cart"
				component={ShoppingCart} />}
			/>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
