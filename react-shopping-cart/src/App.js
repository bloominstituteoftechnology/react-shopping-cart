import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

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
				<Products products={products} addItem={addItem} />
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
