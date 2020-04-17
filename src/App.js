import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
// Context
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};
	const removeItem = id => {
		setCart(cart.filter(item => {
			return item.id !== id;
		}))
	}
	return (
		<ProductContext.Provider value={{ products, addItem }} >
			<CartContext.Provider value={{ cart, removeItem }} >
				{/* Routes */}
				<div className="App">
					<Navigation cart={cart} />							
					<Route exact path="/" component={Products} />
					<Route exact path="/cart" component= {ShoppingCart}/>
					

				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
