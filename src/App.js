import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from "./contexts/ProductContext";
import {CartContext} from "./contexts/CartContext";




// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	// - In `App.js` there is a function called `addItem`. Finish writing the logic in this function to be able to add the given item to the shopping cart
	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* - Wrap all of your components/routes in `App.js` inside of `ProductContext.Provider` component. */}
			<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={cart}>

			{/* Routes */}
			<Route exact path="/" component={Products} />

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
