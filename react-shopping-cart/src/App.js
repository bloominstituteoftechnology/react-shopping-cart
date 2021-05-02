import React, { useState, createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
export const shoppingContext = createContext();
function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};
	const removeFromCart = (props) => {
		setCart(cart.filter((p) => p.id !== props.id));
	  };

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<Route exact path="/"

			render={() =>
				<shoppingContext.Provider value={products}>
				<Products products={products} addItem={addItem} />
			
				</shoppingContext.Provider>
			}
		/>


 
			<Route path="/cart"
				render={(props) => (
					<ShoppingCart 
					{...props}
					cart={cart}
					removeFromCart={removeFromCart}
				/>
				)}
			/>
		</div>
	);
}

export default App;
