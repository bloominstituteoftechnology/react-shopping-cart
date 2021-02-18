import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import CartContext from "./contexts/CartContext"
import  ProductContext  from "./contexts/ProductContext";
// Components
import Navigation from './components/Navigation';
import Products from './components/Products'; 
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [Cart, setCart] = useState([]);

	const addItem = (item, itemId) => {
		// add the given item to the Cart
		if (itemId !== item.id) {
			setCart([item])
		}
		return item
	};

	const removeItem = (item) => {
		setCart([])
	}



	return (	
		<div className="App">
			<Navigation Cart={Cart} />
		<ProductContext.Provider value={{products, addItem, removeItem}}>
				<CartContext.Provider value={{Cart}}>
					{/* Routes */}
			<Route exact path="/">
				<Products/>
			</Route>
			
			<Route path="/Cart">
				<ShoppingCart />
					</Route>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
