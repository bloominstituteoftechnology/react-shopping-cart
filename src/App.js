import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext';
import CartContext  from './contexts/CartContext';

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

	const removeItem = id => {
          console.log ("ID", id)
		const filtered = cart.filter( item => {
			return item.id !==id;
		})
  		console.log("FILTER", filtered)
		setCart(filtered)
       console.log("CART", cart)
 	}

	return (
		<div className="App">
			{/* <Navigation  /> */}

			{/* Routes */}
			<ProductContext.Provider value ={{products, addItem}}>
			<Route exact path="/" component={Products} />
				 
			 
			</ProductContext.Provider>
			<CartContext.Provider value ={{cart, setCart, removeItem}}>
			<Navigation  />

			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>

			</CartContext.Provider>
 
		 
		</div>
	);
}

export default App;
