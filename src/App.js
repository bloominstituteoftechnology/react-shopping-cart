import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const CartContext = createContext();
export const ProductContext = createContext();

function App() {

	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
			 setCart([
				...cart,
				item
			 ])	
	} 
	
	const removeItem = item => {
		const oldItem = products.filter((item) => {
			return item === item
		})
		setCart([
			...cart,
			oldItem
		])
	}

	return (
		<div className="App">
		<CartContext.Provider value={cart}>
			<Navigation/>
		</CartContext.Provider>

			{/* Routes */}
			<Route exact path="/">
			<ProductContext.Provider value={{products, addItem}}>
				<Products  />
			</ProductContext.Provider>
				
			</Route>

			<Route path="/cart">
			<CartContext.Provider value={{cart, removeItem}}>
				<ShoppingCart />
			</CartContext.Provider>
				
			</Route>
		</div>
	);
}

export default App;
