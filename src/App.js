import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const productContext = createContext();
export const cartContext = createContext();

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		if(!cart.includes(item)){
			setCart([
				...cart,
				item
			])
		};
		console.log(cart)
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={ { products }, additem={addItem} }>
				<Route exact path="/">
					<Products />
				</Route>
			
				<Route path="/cart">
					<ShoppingCart />
				</Route>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
