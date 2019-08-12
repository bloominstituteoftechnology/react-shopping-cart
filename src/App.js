import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//context
import {ProductContext} from './contexts/ProductContext';
import {CartContext} from './contexts/CartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = (item) => {
		let newCart = [];
		cart.forEach(i => {
			if (i.id !== item.id) {
				newCart.push(i);
			} else { console.log('deleted ', item)}
		})
		setCart(newCart);
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem, removeItem}}>
				<CartContext.Provider value={cart}>
					<Navigation />

			{/* Routes */}
			
					<Route exact path="/" component={Products}/>
					<Route path="/cart"	component={ShoppingCart}/>
				</CartContext.Provider>
			</ProductContext.Provider>	
		</div>
	);
}

export default App;
