import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Context
import { ProductContext }  from '../src/contexts/ProductContext';
import { CartContext } from '../src/contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<ProductContext.Provider value={{products, addItem}}>
		<CartContext.Provider value={cart}>
		<div className="App">
			<Navigation component={ShoppingCart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				component={Products}
					/>

			<Route
				path="/cart"
				component={ShoppingCart}/>
			/>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
