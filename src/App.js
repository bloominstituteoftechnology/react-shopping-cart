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

			{/* - Wrap all of your components/routes in `App.js` inside of `ProductContext.Provider` component. */}
			<ProductContext.Provider value={{products, addItem}}>
			{/* - Now pass a value prop to our `CartContext.Provider`, this value prop is going to contain our `cart` state. */}
			<CartContext.Provider value={cart}>

			<Navigation cart={cart} key={cart.id}/>

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
