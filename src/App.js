import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from "./contexts/ProductContext"

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { CartContext } from './contexts/cartContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		// 
		console.log(item);
		
		const newItem = {
			id: item.id,
			title: item.title,
			price: item.price,
			image: item.image
		}
		setCart([...cart, newItem]);
	};
	

	return (
		<ProductContext.Provider value={{ products, addItem }}>
		<CartContext.Provider value={{cart, setCart}} >
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
		</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
