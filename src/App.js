import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import useLocalStorage from './hooks/useLocalStorage';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useLocalStorage('shoppingCart', []);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = removeItem => {
		const currentCart = [...cart];
		const updatedCart = currentCart.filter(item => item.id !== removeItem);
		setCart(updatedCart);
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem}}>
				<CartContext.Provider value={{cart, removeItem}}>
					<Navigation cart={cart} />
					<Route exact path='/' component={Products} />
					<Route path='/cart' component={ShoppingCart} />
				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
