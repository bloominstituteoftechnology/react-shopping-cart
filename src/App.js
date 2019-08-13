import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

// context
import ProductContext  from './context/ProductContext';
import  CartContext  from './context/CartContext';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};


	return (
		<ProductContext.Provider value={{ products, addItem }}>
			<CartContext.Provider value = {{cart}}>
			<div className="App">
				<Navigation cart={cart} />

				{/* Routes */}
				{/* Original  products route
				<Route
					exact
					path="/"
					render={() => (
						<Products
							products={products}
							addItem={addItem}
						/>
					)}
				/>*/}
				{/*Refactored products component */}

				<Route exact path = '/' component={Products}/>
				{/*Original  Cart route
				<Route
					path="/cart"
					render={() => <ShoppingCart cart={cart} />}
				/>*/}
				{/*Refactored Cart route*/}

				<Route exact path = '/' component= {ShoppingCart}/>	
			</div>
			</CartContext.Provider>	
		</ProductContext.Provider>
	);
}

export default App;
