import React from 'react';

import { useContext } from 'react';
// Components
import { CartContext } from '../contexts/CartContext';

import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const cart = useContext(CartContext);
	console.log('from shoppingCart', cart)
	const getCartTotal = () => {
		return cart.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.cart.map(item => (
				<Item key={item.id} {...item} />
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
