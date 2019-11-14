import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

 function App() {
   // data is an array of product objects with id, title, price, and image props
 	const [products] = useState(data);
   // keeps track of all the items in our cart
 	const [cart, setCart] = useState([]);

   // takes in an item and adds it to our cart array
 	const addItem = item => {
 		setCart([...cart, item]);
 	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route
				exact
				path="/"
				render={() => (
					<Products
						products={products}
						addItem={addItem}
					/>
				)}
			/>

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
		</div>
	);
}

export default App;
