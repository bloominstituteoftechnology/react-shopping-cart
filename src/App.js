import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// import context API
import { productContext } from './contexts/ProductContext';

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

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<productContext.Provider value={{products, addItem}}>
				<Route
					exact
					path="/"
					component={Products}
				/>

				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>
			</productContext.Provider>
		</div>
	);
}

export default App;
