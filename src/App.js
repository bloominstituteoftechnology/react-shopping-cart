import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { UserContext } from './contexts/UserContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		console.log('addItem',[...cart, item])
		setCart([...cart, item]);
	};
	const removeItem = item => {
		setCart(cart.filter(a => a.id !== item));
	};
	
	const con = () =>{
		console.log('updated cart', passing);
	}

	useEffect(con, [cart])
	const passing = {cart: cart, remove: removeItem, products: products, addItem: addItem}

	

	return (
		<UserContext.Provider value={passing}>
		<div className="App">
			
				<Navigation/>
			

			{/* Routes */}
			<Route exact path="/">
			
				<Products />
		
			</Route>

			<Route path="/cart">
			
				<ShoppingCart/>
			
			</Route>
		</div>
		</UserContext.Provider>
	);
}

export default App;
