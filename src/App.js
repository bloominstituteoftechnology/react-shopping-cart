import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
//imported contexts
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext'


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		
		// products.filter((item, i) => {
		// 	if(products[i] === item[i]){
		// 		return setCart(item)
		// 	}
		// 	else{
		// 		return cart
		// 	}
		
		// })

		//setCart to cart (must be an array if using spread operator)
		setCart([...cart,item])
	};
	console.log(cart)
	
	//Values only accept an object 
	
	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem, cart} }>
				<CartContext.Provider value={{cart}}>
					<Navigation />

					{/* Routes */}
					<Route exact path="/">
						<Products  />
					</Route>

					<Route path="/cart">
						<ShoppingCart  />
					</Route>
				</CartContext.Provider>	
			</ProductContext.Provider>	
		</div>
	);
}

export default App;
