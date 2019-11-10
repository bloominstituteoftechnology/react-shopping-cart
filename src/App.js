import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './context/ProductContext';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {CartContext} from './context/CartContext';
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
		<ProductContext.Provider value={{products, addItem}}>
		<CartContext.Provider value={{cart, addItem}}>
		<Navigation cart={cart} />
			

			
			<Route
				exact path='/' component={Products}
			/>

			<Route
				path='/cart' component={ShoppingCart}
			/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
