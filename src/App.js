import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './contexts/ProductContext'
// Components
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
		<ProductContext.Provider value={data}>
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				<Route
					exact
					path="/"
					render={() => (
						<Products
							products={products}
							addItem={addItem}
						/>
					)}
				/>

				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
			</div>
		</ProductContext.Provider>
	);
}

export default App;
