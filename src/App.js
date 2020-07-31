import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext } from './contexts/ProductContext'

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
	setCart({...cart, item})
	};

	return (
		<div className="App">

			<ProductContext.Provider value={{products,item}}>
				<CartContext.Provider value={{cart}}>
					<Navigation cart={cart} />
					{/* Routes */}
					<Route exact path="/">
						<Products/>
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</CartContext.Provider >
			</ProductContext.Provider>
		</div>
	);
}

export default App;
