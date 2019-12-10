import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext} from './components/Contexts/ProductContext';
import { CartContext } from './components/Contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		if (cart) {
			let count = 0;
				cart.map(element => {
					if(element.id === item.id){
						count +=1
					}				
				})
				if (count === 0){
						setCart([...cart, item]);
				}
			}else {
				setCart([item]);
			}
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<Route exact path="/"  component={Products}/>
				
			<CartContext.Provider value= {cart}>
			<Route
				path="/cart"
				component={ShoppingCart}
			/>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
