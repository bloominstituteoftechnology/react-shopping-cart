import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//contexts
import { ProductContext } from './contexts/ProductContext.js';
import { CartContext } from './contexts/CartContext.js';

//hooks
import {useLocalStorage} from './hooks/useLocalStorage.js';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('savedCart', '');
	// const [count, setCount] = useState(0);

	// const cartCount = count =>{
	// 	let tempCount = count + 1;
	//
	// 	return tempCount;
	//
	// }

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);

		// console.log('current before new addition cart:', cart);
	};

	const removeItem = item => {
		// console.log('filter test:', cart.filter(item2 => {
		// 		return item!==item2.id;
		// 	}));
		setCart(cart.filter(item2 => {
				return item2.id!==item;
			}));

		// console.log('remove item cart status:', cart);
	}

	return (

		<div className="App">
			<ProductContext.Provider value={{ products, addItem, removeItem }} >
				<CartContext.Provider value={cart} >
					<Navigation />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>



					<Route
						path="/cart"
						component={ShoppingCart}
					/>
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
