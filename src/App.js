import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import useLocalStorage from './hooks/localStorage';


function App() {
	const [products] = useState(data);
	// const [storedValue, setStoredValue] = useLocalStorage("cartKey", []);
	// const [cart, setCart] = useState(storedValue);
	const [cart, setCart] = useLocalStorage('cartKey', []);

	console.log("Stored cart value: ", cart);

	const addItem = item => {
		// add the given item to the cart
		const updatedCart = [...cart, item]
		setCart(updatedCart)
		// setStoredValue(updatedCart);
		console.log("Added item to cart", updatedCart);
	};

	const removeItem = selectedItem => {
		// removes the given item from teh cart
		let editedCart = cart.filter(item => item.id !== selectedItem.id);
		setCart(editedCart);
		// setStoredValue(editedCart);
		console.log("Removed item from cart", editedCart);
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{
				products,
				addItem
			}} // the value is an object with two properties.  products: products is implied
			>
			<CartContext.Provider value={{
				cart,
				removeItem
			}}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<Products products={products} addItem={addItem} />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
