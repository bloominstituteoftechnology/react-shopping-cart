import React, { useState, createContext, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';


// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
export const shoppingContext = createContext();
export default function App() {
	const [products,setProducts] = useState([]);
	const [cart, setCart] = useState([]);



	const getData = () => data.then(res => res.json());
	const addItem = item => {
		setCart([...cart, item]);
	};
	const removeFromCart = (props) => {
		setCart(cart.filter((p) => p.id !== props.id));
	  };

	  useEffect(() => {
		getData().then(data => setProducts(data));
	  }, []);

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/"

			render={() =>
				products && (
					<shoppingContext.Provider value={products}>
				<Products products={products} addItem={addItem} />
			
				</shoppingContext.Provider>
				)
			}
		/>


 
			{/* <Route path="/cart"
				render={(props) => (
					<ShoppingCart 
					{...props}
					cart={cart}
					removeFromCart={removeFromCart}
				/>
				)}
			/> */}
		</div>
	);
}
 
