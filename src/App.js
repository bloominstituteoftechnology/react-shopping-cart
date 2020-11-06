import React, { useState, useContext, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
		// console.log(cart)
	};

	const removeItem = item => {
		// remove the given item from the cart
		setCart(cart.filter((p) => {
			// console.log("p", p, "item", item)
			return p.id !== item
			
		}))
		// console.log(cart)
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
			<div className="App">
				<Navigation  />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
} 




export default App;
