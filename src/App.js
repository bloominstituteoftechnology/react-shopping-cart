import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import axios from 'axios';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext} from './Contexts/ProductContext';
import { CartContext } from './Contexts/CartContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		
		axios 
			.post('http://localhost:3000/items', item)
			.then(response =>{
				this.setState({
					items: response.data
				});
				this.props.history.push('/item-list');
			});

			//adding .catch breaks the app
			// .catch(error => {
			// 	console.log('somewthing does not work' error);
			// });
	};

	return (
		<div className="App">
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductContext.Provider value={{products, addItem}}>
				<Route exact path="/"  component={products}/>
				)}
			/>
			<CartContext.Provider value= {this.state.cart}>
			<Route
				path="/cart"
				render={() => <ShoppingCart cart={cart} />}
			/>
			</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
