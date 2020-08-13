import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//Contexts
import {ProductContext} from "./contexts/ProductContext";
import {CartContext} from "./contexts/CartContext";

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);


	useEffect(()=>{
		if(window.localStorage.getItem("cart")){
			setCart(JSON.parse(window.localStorage.getItem("cart")))
		}else {
			window.localStorage.setItem("cart", JSON.stringify(cart));
		}
	}, [])

	useEffect(()=>{
		window.localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart])

	const addItem = item => {
		setCart([...cart, item]);	
	};

	const removeItem = id => {
		setCart(cart.filter(item=> item.id !== id));
	}

	return (
		<ProductContext.Provider value={{products, addItem}}>
			<CartContext.Provider value={{cart, removeItem}}>
				<div className="App">
					<Navigation/>

					{/* Routes */}
					<Route exact path="/">
						<Products/>
					</Route>

					<Route path="/cart">
						<ShoppingCart/>
					</Route>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
