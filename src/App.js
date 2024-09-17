import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {productContext} from './Contexts/productContext'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { cartContext } from './Contexts/cartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart,item])
		// add the given item to the cart
	};

	return (
		<div className="App">
		<productContext.Provider value = {{products, addItem}}>
			<cartContext.Provider value = {cart}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
  				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</cartContext.Provider>
		</productContext.Provider>
		</div>
	);
}

export default App;
