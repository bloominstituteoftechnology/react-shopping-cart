import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from "./contexts/productContext";
import {cartContext} from './contexts/cartContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		// add the given item to the cart
		setCart([...cart, item]);
	};
	const removeItem = (itemId) => {
		setCart(cart.filter((item) => item.id !== itemId));
	};

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<cartContext.Provider value={{ cart, removeItem}}>
				<Navigation/>

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>

				</cartContext.Provider>	
			</ProductContext.Provider>
			
		</div>
	);
}

export default App;
