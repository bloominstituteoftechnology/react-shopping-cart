import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import {ProductContext, CartContext} from './context/index'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	console.log({products})
	const addItem = item => {
		// products.map(book=> setCart(book))
		setCart([...cart,item])
	};

	return (
		<div className="App">
		
			<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value={{cart}}>
				<Navigation />

				<Route exact path="/">
					<Products />
				</Route>
				
				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
