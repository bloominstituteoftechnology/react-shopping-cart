import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './context/ProductContext';
import CartContext from './context/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (item,idx) => {
		// add the given item to the cart
		if(idx !== item.id){
			setCart([item])
		}
		return item
	};
	const removeItem = (item) => {
		setCart([])
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem, removeItem}}>
				<CartContext.Provider value={{cart}}>
			<Navigation />

			{/* Routes */}
			<Route exact path="/">
			<Products  />
			</Route>

			<Route path="/cart">
			<ShoppingCart  />
			</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
