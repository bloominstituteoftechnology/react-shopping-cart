import React, { useContext } from 'react';
import { Shopping } from '../App'
// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {

	const values = useContext(Shopping)

	const getCartTotal = () => {
		return values.cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{values.cart.map((item) => (
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
