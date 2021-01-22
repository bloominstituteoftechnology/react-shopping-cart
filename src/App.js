  
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ShopContext } from './contexts/ProductContexts'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
	};

	return (
		<div className="App">
			<ShopContext.Provider value={{ products, cart }}> {/* products: products, cart: cart */}
			
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
			
			</ShopContext.Provider>	
		</div>
	);
}

export default App;