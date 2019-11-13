import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
import ProductContext from './context/ProductContext';
import CartContext from './context/CartContext';

//Hooks
import useLocalStorage from './hooks/useLocalStorage';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		cart.push(item);
		setCart(cart);
		console.log(cart);
	};

	const removeItem = item => {

		cart.splice(cart.indexOf(item), 1)
		setCart(cart);
		console.log(cart);
	};

	return (
		<div className="App">
			{/* Routes */}
			<ProductContext.Provider value = {{ products, addItem }}>
				<CartContext.Provider value = {{cart, removeItem}}>
					<Navigation/>
					<Route
						exact
						path="/"
						component = {Products}
					/>

					<Route
						path="/cart"
						component = {ShoppingCart}
						/>
				</CartContext.Provider>
			</ProductContext.Provider>

		</div>
	);
}

export default App;
