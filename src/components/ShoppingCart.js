import React, { useContext } from 'react';

import { CartContext } from '../contexts/CartContext.js';
import {ProductContext} from '../contexts/ProductContext.js';

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const product = useContext(ProductContext);
	const cart = useContext(CartContext);
	// let cartCount= 0;
	console.log('ShoppingCart cart:', cart);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} removeItem={product.removeItem} {...item}  />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button onClick={()=>console.log('current cart:', cart)}>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
