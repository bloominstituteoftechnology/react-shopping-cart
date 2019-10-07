import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// import context API
import { productContext } from './contexts/ProductContext';
import { cartContext } from './contexts/CartContext';

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

	const removeItem = id => event => {
		const newCart = cart.filter( item => {
			return item.id !== id
		})
		setCart(newCart);
	}

	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart]);

	return (
		<div className="App">
			<cartContext.Provider value={{cart, removeItem}}>
				<Navigation />

				{/* Routes */}
				<productContext.Provider value={{products, addItem}}>
					<Route
						exact
						path="/"
						component={Products}
					/>

					<Route
						path="/cart"
						render={() => <ShoppingCart />}
					/>
				</productContext.Provider>
			</cartContext.Provider>
		</div>
	);
}

export default App;
