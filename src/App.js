import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {Context} from './context/context';
import { CartContext } from './context/cartContext';

import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	const addItem = item => {
	setCart([...cart, item]);
	};

	return (
		<div className="App">
		<Context.Provider value={{products, addItem}}>
		<CartContext.Provider value ={ cart }>
		<Navigation cart={cart} />
		<Route exact path="/">
		<Products />
		</Route>
		<Route path="/cart">
		<ShoppingCart />
		</Route>
		</CartContext.Provider>
		</Context.Provider>
		</div>
	);
}

export default App;