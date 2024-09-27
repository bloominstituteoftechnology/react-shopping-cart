import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { productContext } from "./contexts/ProductContext"
import { cartContext } from "./contexts/CartContext"




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

	// create remove item function later

	const removeItem = id => {
		setCart(cart.filter((e)=> e.id !== id))
	}

	return (
		<productContext.Provider value={{products, addItem, removeItem}}>
			<cartContext.Provider value={{cart,removeItem}}>

		<div className="App">
			<Navigation/>

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>
			{/* products={products} addItem={addItem} */}

			<Route path="/cart">
				<ShoppingCart/>
			</Route>
		</div>

		</cartContext.Provider>
		</productContext.Provider>

	);
}

export default App;
