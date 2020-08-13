// https://github.com/royeradames/react-shopping-cart.git
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//contenxt
import { ProductContext } from './contexts/ProductContext'
import { CartContext } from './contexts/CartContext'


//import useLocalStorage
import useLocalStorage from './hooks/useLocalStorage'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage( 'cart', []);
	debugger
	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};
	const removeItem = itemId => {
		setCart(
			cart.filter( aCartItem => 
				aCartItem.id !== itemId
		))
	}

	return (
		<div className="App">
			<CartContext.Provider value={{ cart, removeItem }}>
				<Navigation />

				{/* Routes */}
				<ProductContext.Provider value={{ products, addItem }}>
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
