import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {productContext} from './Contexts/productContext'
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
		<productContext.Provider>
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products products={products} addItem={addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</productContext.Provider>
		</div>
	);
}

export default App;
