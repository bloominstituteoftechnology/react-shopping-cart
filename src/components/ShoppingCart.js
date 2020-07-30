import React from 'react';

import { useContext } from 'react';
// Components
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

import Item from './ShoppingCartItem';

const ShoppingCart = () => {
	const { products, addItem } = useContext(ProductContext);
	const cart = useContext(CartContext);
	console.log('from shoppingCart', products)
	const getCartTotal = () => {
		return cart.cart.reduce((acc, value) => {
			return acc + products.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.cart.map(item => (
				<Item key={products.id} {...item} />
			))}


			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<button>Checkout</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
