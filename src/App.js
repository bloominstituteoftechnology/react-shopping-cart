import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
//Import ProductContext
import { ProductContext } from './contexts/ProductContext';
//Import CartContext
import { CartContext } from './contexts/CartContext';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = (item) => {
		// add the given item to the cart
		setCart([...cart, item]);
	};

	return (
		//ProductContext.Provider - CartContext.Provider
		<ProductContext.Provider value={{ products, addItem}}>	
			<CartContext.Provider value={{ cart  }}>
				<div className="App">
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart />
					</Route>
				</div>
			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
