import React, { createContext, useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const ProductContext = createContext();
console.log(ProductContext)
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState(products[0]);

	const addItem = item => {
		// add the given item to the cart
	};

	return (
		<div className="App">
			<Navigation cart={cart} />
			{products.map((p) => {
			// {/* Routes */}
				<Route exact path="/">
				<Products
					key= {p.title}
					products={p.title}
					addItem={p.addItem} 
					onCLick={()=> setCart}/>
				{p.title}
			</Route>
			})}

			<Route path="/cart">
				<ShoppingCart cart={cart} />
			</Route>
		</div>
	);
}

export default App;
