import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './Contexts/ProductContext'
import { CartContext} from './Contexts/CartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
		// add the given item to the cart
	};

	return (

		<div className="App">
			<CartContext.Provider value={{cart}}>
			<Navigation />

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<Route exact path="/">
					<Products />
				</Route>
			</ProductContext.Provider>

			<Route path="/cart">
				<ShoppingCart />
			</Route>
			 </CartContext.Provider>
		</div>
	);
}

export default App;
