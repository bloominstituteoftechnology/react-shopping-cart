import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { productContext } from "./contexts/ProductContext"

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart,item])
	};

	//create remove item function later

	// const removeItem = item => {
	// 	setCart(cart.filter((e)=> e.id !== item.id))
	// }

	return (
		<productContext.Provider value={{products, addItem}}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>
			{/* products={products} addItem={addItem} */}

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
		</productContext.Provider>
	);
}

export default App;
