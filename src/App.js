import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from "./components/contexts/ProductContext"
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import CartContext from './components/contexts/CartContext'
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log("item", item)
		setCart([ ...cart, item])
	};
	const removeItem = removeThis => {
		setCart(cart => cart.filter(item => 
			item.id !== removeThis))
	}

	return (
		<ProductContext.Provider value={{ products, addItem}}>
			<CartContext.Provider value={{ cart, setCart, removeItem}}>
		<div className="App">
			<Navigation  />

			{/* Routes */}
			<Route
				exact path="/" component={Products}/>
				

			<Route
				path="/cart" 
				component={ShoppingCart}/>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
