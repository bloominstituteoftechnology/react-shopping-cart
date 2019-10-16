import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './contexts.js/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = {
		// add the given item to the cart
		products

	};

	return (
		<ProductContext.Provider value ={{ products, addItem }}> 
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
				<div>
					<Route
						exact path="/"
						component={Products} />

					<Route
						path="/cart"
						render={() => <ShoppingCart cart={cart} />}
					/>
				</div>
			
		</div>
		</ProductContext.Provider>
	);
}

export default App;
