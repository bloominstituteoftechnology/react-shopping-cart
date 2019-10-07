
// - First, let's head to our `ShoppingCart` component and import the `useContext` hook and our `CartContext`.
import React, {useContext} from 'react';
import {CartContext} from "../contexts/CartContext";

// Components
import Item from './ShoppingCartItem';

const ShoppingCart = () => {

	// - Now in the component, pass `CartContext` to the `useContext` hook and assign it to a variable named cart.
	const cart = useContext(CartContext);

	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
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
