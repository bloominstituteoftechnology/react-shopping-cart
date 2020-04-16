import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
//Contexts
import ProductContext from './contexts/ProductContext.js';
import CartContext from './contexts/CartContext.js';
//hooks
import UseLocalStorage from './hooks/useLocalStorage.js';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = UseLocalStorage('reactshoppingcart',[]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	const removeItem = id =>{
		setCart(cart.filter(item => item.id != id))
	}

	return (
		<div className="App">
			<CartContext.Provider value={{ cart, removeItem }}>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
			<ProductContext.Provider value={{ products, addItem }}>
				<Products/>
			</ProductContext.Provider>
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
