import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import ProductContext from './contexts/ProductContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);
	
	const addItem = item => {
		products.forEach(product => {
			product.id === item.id && setCart([...cart, item])
			console.log('cart', cart)
		})
	};

	return (
		<div className="App">
			<ProductContext.Provider 
				value={{
					products,
					addItem
				}}>

				<Navigation cart={cart} />

				{/* Routes */}
				<Route exact path="/">
					<Products />
				</Route>

				<Route path="/cart">
					<ShoppingCart cart={cart} />
				</Route>

			</ProductContext.Provider>
		</div>
	);
}

export default App;
