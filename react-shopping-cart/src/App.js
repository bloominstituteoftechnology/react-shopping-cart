import React, { useState, createContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
// const getData = () => fetch(data).then(res => res.json());

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
export const shoppingContext = createContext();
export const cartContext = createContext();
export default function App() {

	const [products,setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};
	const removeFromCart = (props) => {
		setCart(cart.filter((p) => p.id !== props.id));
	  };

	  useEffect(() => {
		
		setProducts(data)
	  }, []);

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/">
			
					<shoppingContext.Provider value={products}>
				<Products products={products} addItem={addItem} />
			
				</shoppingContext.Provider>
			
			
			</Route>


 
			{/* <Route path="/cart"
				render={(props) => (
					<ShoppingCart 
					{...props}
					cart={cart}
					removeFromCart={removeFromCart}
				/>
				)}
			/> */}
			
			<Route path="/cart"
						render={(props) => (
							<cartContext.Provider value={cart}>
								<ShoppingCart 
							// {...props}
							cart={cart}
							removeFromCart={removeFromCart}
						/>
							</cartContext.Provider>
						)}
					/> 
		</div>
	);
}
 
