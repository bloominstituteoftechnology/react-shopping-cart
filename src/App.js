import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';

import { ProviderContext } from './contexts.js/ProductContext';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = {
		// add the given item to the cart
		products

	};

	return (
		<ProviderContext.Provider value ={{ products, addItem }}> 
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			
		</div>
		</ProviderContext.Provider>
	);
}

export default App;
