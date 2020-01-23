import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// importing ProductContext
import { ProductContext } from "./contexts/ProductContext";
// importing CartContext
import { CartContext } from "./contexts/CartContext";

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		// Wrapping all components
		// Passing products state and the addItem function
		// These are now available in the 'value' object
		<ProductContext.Provider value={{products, addItem}}>
		<CartContext.Provider value={cart}>
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			{/* <Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/> */}

			<Route exact path="/" component={Products} />

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
